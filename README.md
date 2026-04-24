# org-ai-agent-monorepo-v1

Единый репозиторий-источник для агентных стандартов, шаблонов и project overlays.

## Что здесь лежит
- `docs/ai/` — общий source of truth по engineering rules
- `AGENTS.md` — общие инструкции для AGENTS-совместимых агентов
- `CLAUDE.md` — общий вход для Claude Code
- `.cursor/` — базовые project rules, skills, subagents и command wrappers
- `.claude/` — базовые Claude skills, agents и settings
- `.codex/` — базовый Codex config, agents и skills
- `templates/web-nextjs-strapi-prisma/` — greenfield шаблон для Next.js + Strapi + Prisma + Postgres + Docker
- `templates/mobile-flutter-fastapi-ai/` — greenfield шаблон для Flutter + FastAPI gateway + domain services + assistant service
- `templates/ci/flutter-quality.github-actions.yml` — шаблон GitHub Actions для Flutter quality gates
- `templates/mobile-release/RELEASE_CHECKLIST.md` — переиспользуемый чеклист мобильного релиза
- `overlays/ncc/` — project-specific overlay для текущего NCC репозитория
- `overlays/internal-mobile-flutter/` — brownfield overlay для внутренних Flutter/mobile репозиториев без копирования app-specific деталей
- `DECISIONS.md` — зафиксированные архитектурные решения
- `REPO_AUDIT.md` — как были использованы исходные донорские репозитории

## Как использовать

### 1. Если нужно стандартизировать существующий проект
- Копируй в корень проекта: `docs/ai/`, `AGENTS.md`, `CLAUDE.md`, `.cursor/`, `.claude/`, `.codex/`
- Для NCC используй `overlays/ncc/` как поверхностный слой над текущим репозиторием
- Для brownfield Flutter/mobile репозитория используй `overlays/internal-mobile-flutter/` как адаптационный слой поверх существующей структуры

### 2. Если нужно создать новый web-проект
- Бери `templates/web-nextjs-strapi-prisma/` как стартовую точку

### 3. Если нужно создать новый mobile/backend-проект
- Бери `templates/mobile-flutter-fastapi-ai/` как стартовую точку
- Для CI можно взять `templates/ci/flutter-quality.github-actions.yml`
- Для релизного процесса можно взять `templates/mobile-release/RELEASE_CHECKLIST.md`

## Принцип структуры
- Корень репозитория хранит только общие стандарты и tool wrappers
- `templates/` хранит greenfield заготовки
- `overlays/` хранит project-specific адаптации для уже существующих репозиториев
- mobile greenfield template и brownfield overlay живут отдельно, чтобы не смешивать стартовую архитектуру и безопасную адаптацию legacy-кода

## Рекомендуемый workflow
1. Сначала правим `docs/ai/` — это главный source of truth.
2. Потом обновляем `.cursor/`, `.claude/`, `.codex/`, если нужен tool-specific behavior.
3. Потом синхронизируем изменения в `templates/` и `overlays/`.
