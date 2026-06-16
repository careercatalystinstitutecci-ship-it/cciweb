# Careercat Backend

Python FastAPI backend for saving contact form submissions in PostgreSQL.

## Setup

1. Create a PostgreSQL database:

```sql
CREATE DATABASE careercat;
```

2. Create and activate a virtual environment:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

3. Install dependencies:

```powershell
pip install -r requirements.txt
```

4. Create `.env` from `.env.example` and update `DATABASE_URL` if needed.

5. Start the API:

```powershell
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`.

## Endpoints

- `GET /api/health`
- `POST /api/contact`

Tables are created automatically on startup.
