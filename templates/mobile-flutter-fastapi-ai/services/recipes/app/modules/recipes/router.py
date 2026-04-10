from fastapi import APIRouter

router = APIRouter(prefix='/recipes', tags=['recipes'])

@router.get('/')
async def list_recipes() -> dict[str, str]:
    return {'module': 'recipes', 'note': 'Replace with recipe search, ranking, or retrieval logic.'}
