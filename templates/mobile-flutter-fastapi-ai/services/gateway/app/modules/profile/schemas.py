from pydantic import BaseModel

class ProfileResponse(BaseModel):
    user_id: str
    status: str = 'placeholder'
