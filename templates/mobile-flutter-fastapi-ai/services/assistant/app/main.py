from fastapi import FastAPI
from app.modules.health.router import router as health_router
from app.modules.assistant.router import router as assistant_router
from app.modules.intents.router import router as intents_router
from app.modules.providers.router import router as providers_router

app = FastAPI(title='assistant', version='0.1.0')
app.include_router(health_router)
app.include_router(assistant_router)
app.include_router(intents_router)
app.include_router(providers_router)
