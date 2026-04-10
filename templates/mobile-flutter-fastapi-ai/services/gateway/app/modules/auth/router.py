from fastapi import APIRouter

router = APIRouter(prefix='/auth', tags=['auth'])

@router.get('/')
async def list_auth() -> dict[str, str]:
    return {'module': 'auth', 'note': 'Replace with real auth endpoints and permission handling.'}
