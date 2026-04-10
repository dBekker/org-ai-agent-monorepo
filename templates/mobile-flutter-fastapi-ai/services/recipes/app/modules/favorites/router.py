from fastapi import APIRouter

router = APIRouter(prefix='/favorites', tags=['favorites'])

@router.get('/')
async def list_favorites() -> dict[str, str]:
    return {'module': 'favorites', 'note': 'Replace with favorite persistence and retrieval logic.'}
