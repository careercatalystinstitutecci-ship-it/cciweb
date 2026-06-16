from datetime import datetime

from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactSubmissionCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=10, max_length=30)
    subject: str | None = Field(default=None, max_length=200)
    message: str = Field(min_length=5, max_length=5000)

    @field_validator("name", "phone", "message", mode="before")
    @classmethod
    def strip_required_text(cls, value: str) -> str:
        if isinstance(value, str):
            return value.strip()
        return value

    @field_validator("subject", mode="before")
    @classmethod
    def strip_optional_text(cls, value: str | None) -> str | None:
        if isinstance(value, str):
            value = value.strip()
            return value or None
        return value


class ContactSubmissionRead(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    subject: str | None
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}


class SiteContentPayload(BaseModel):
    content: dict

class config:
    schema_extra = {
        
    }