from fastapi import APIRouter

router = APIRouter(prefix='/websocket', tags=['websocket'])

@router.get('/')
async def list_websocket() -> dict[str, str]:
    return {'module': 'websocket', 'note': 'Replace with websocket session coordination and event flow.'}
