from fastapi import FastAPI
from app.modules.health.router import router as health_router
from app.modules.auth.router import router as auth_router
from app.modules.profile.router import router as profile_router
from app.modules.websocket.router import router as websocket_router

app = FastAPI(title='gateway', version='0.1.0')
app.include_router(health_router)
app.include_router(auth_router)
app.include_router(profile_router)
app.include_router(websocket_router)
