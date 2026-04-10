from fastapi import FastAPI
from app.modules.health.router import router as health_router
from app.modules.recipes.router import router as recipes_router
from app.modules.favorites.router import router as favorites_router
from app.modules.ingredients.router import router as ingredients_router

app = FastAPI(title='recipes', version='0.1.0')
app.include_router(health_router)
app.include_router(recipes_router)
app.include_router(favorites_router)
app.include_router(ingredients_router)
