# backend/app/routers/auth.py
from fastapi import APIRouter
from pydantic import BaseModel 

router = APIRouter()

class User(BaseModel):
    id: int
    email: str
    full_name: str

class LoginResponse(BaseModel):
    access_token: str
    user: User

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(email: str, password: str):
    # ejemplo de respuesta
    return {
        "access_token": "fake-jwt-token",
        "user": {
            "id": 1,
            "email": email,
            "full_name": "Test User"
        }
    }

@router.post("/login", response_model=LoginResponse)
async def login(data: LoginRequest):
    # Por ahora, mock (simula un usuario)
    fake_user = User(id=1, email=data.email, full_name="Usuario Demo")
    return LoginResponse(access_token="fake-jwt-token", user=fake_user)