from fastapi import APIRouter

router = APIRouter(prefix='/assistant', tags=['assistant'])

@router.get('/')
async def list_assistant() -> dict[str, str]:
    return {'module': 'assistant', 'note': 'Replace with public assistant routes.'}
