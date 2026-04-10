from fastapi import APIRouter

router = APIRouter(prefix='/ingredients', tags=['ingredients'])

@router.get('/')
async def list_ingredients() -> dict[str, str]:
    return {'module': 'ingredients', 'note': 'Replace with ingredient normalization and lookup logic.'}
