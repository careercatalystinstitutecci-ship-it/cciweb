from secrets import compare_digest
import json

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from .config import get_settings
from .database import Base, engine, get_db
from .default_content import DEFAULT_SITE_CONTENT
from .models import ContactSubmission, SiteContent
from .schemas import ContactSubmissionCreate, ContactSubmissionRead, SiteContentPayload


settings = get_settings()
security = HTTPBasic()

app = FastAPI(title="Careercat API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)
    db = next(get_db())
    try:
        if db.get(SiteContent, 1) is None:
            db.add(SiteContent(id=1, content=json.dumps(DEFAULT_SITE_CONTENT)))
            db.commit()
    finally:
        db.close()


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


def get_site_content_from_db(db: Session) -> dict:
    row = db.get(SiteContent, 1)
    if row is None:
        return DEFAULT_SITE_CONTENT
    return json.loads(row.content)


@app.get("/api/site-content")
def get_site_content(db: Session = Depends(get_db)) -> dict:
    return get_site_content_from_db(db)


def require_admin(
    credentials: HTTPBasicCredentials = Depends(security),
) -> str:
    valid_username = compare_digest(credentials.username, settings.admin_username)
    valid_password = compare_digest(credentials.password, settings.admin_password)

    if not (valid_username and valid_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin credentials.",
            headers={"WWW-Authenticate": "Basic"},
        )

    return credentials.username


@app.get("/api/admin/login")
def admin_login(admin_username: str = Depends(require_admin)) -> dict[str, str]:
    return {"username": admin_username}


@app.get("/api/admin/site-content")
def get_admin_site_content(
    db: Session = Depends(get_db),
    _: str = Depends(require_admin),
) -> dict:
    return get_site_content_from_db(db)


@app.put("/api/admin/site-content")
def update_admin_site_content(
    payload: SiteContentPayload,
    db: Session = Depends(get_db),
    _: str = Depends(require_admin),
) -> dict:
    row = db.get(SiteContent, 1)
    serialized = json.dumps(payload.content)

    if row is None:
        row = SiteContent(id=1, content=serialized)
        db.add(row)
    else:
        row.content = serialized

    db.commit()
    return payload.content


@app.post(
    "/api/contact",
    response_model=ContactSubmissionRead,
    status_code=status.HTTP_201_CREATED,
)
def create_contact_submission(
    payload: ContactSubmissionCreate,
    db: Session = Depends(get_db),
) -> ContactSubmission:
    submission = ContactSubmission(**payload.model_dump())
    db.add(submission)

    try:
        db.commit()
        db.refresh(submission)
    except SQLAlchemyError as exc:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not save contact submission.",
        ) from exc

    return submission


@app.get(
    "/api/admin/contact-submissions",
    response_model=list[ContactSubmissionRead],
)
def list_contact_submissions(
    db: Session = Depends(get_db),
    _: str = Depends(require_admin),
) -> list[ContactSubmission]:
    return (
        db.query(ContactSubmission)
        .order_by(ContactSubmission.created_at.desc())
        .all()
    )


@app.delete("/api/admin/contact-submissions/{submission_id}")
def delete_contact_submission(
    submission_id: int,
    db: Session = Depends(get_db),
    _: str = Depends(require_admin),
) -> dict[str, str]:
    submission = db.get(ContactSubmission, submission_id)

    if submission is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Contact submission not found.",
        )

    db.delete(submission)
    db.commit()
    return {"status": "deleted"}
