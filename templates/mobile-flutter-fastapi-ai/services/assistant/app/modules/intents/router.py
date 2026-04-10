from fastapi import APIRouter

router = APIRouter(prefix='/intents', tags=['intents'])

@router.get('/')
async def list_intents() -> dict[str, str]:
    return {'module': 'intents', 'note': 'Replace with orchestration or intent resolution.'}
