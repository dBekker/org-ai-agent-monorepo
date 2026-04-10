from fastapi import APIRouter

router = APIRouter(prefix='/providers', tags=['providers'])

@router.get('/')
async def list_providers() -> dict[str, str]:
    return {'module': 'providers', 'note': 'Replace with provider adapters and retries.'}
