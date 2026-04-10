# gateway

Edge service for auth, onboarding, user profile, files, and websocket coordination.

## Rules
- keep routers thin
- put business logic in services or domain modules
- keep public schemas separate from persistence models
- add migration notes when contracts or schemas change
