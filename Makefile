# Quick Start
quick-start:
	@make init
	@make start

## common
init:
	@make cp-envs
	@make root-init
	@make gql-init
	@make mobile-init
	@make pc-init

cp-envs:
	cp .env.example .env
	cp ./apps/backend/gql/.env.example ./apps/backend/gql/.env

generate:
	npm run codegen

# Run Script
start:
	@make docker-build-up

# Docker
docker-build-up:
	docker-compose down && docker-compose up --build -d

# Root
root-init:
	npm i

# GraphQL
in-gql:
	docker-compose exec gql bash
gql-build:
	npm run dev -w apps/backend/gql
gql-init:
	cd ./apps/backend/gql && npm i
	cd ./apps/backend/gql && npm run prisma-generate
	cd ./apps/backend/gql && npm run prisma-deploy
	cd ./apps/backend/gql && npm run build
gql-run:
	cd ./apps/backend/gql && npm run dev

# mobile
mobile-init:
	cd ./apps/frontend/mobile && npm i
mobile-run:
	cd ./apps/frontend/mobile && npm run dev

# pc
pc-init:
	cd ./apps/frontend/pc && npm i
pc-run:
	cd ./apps/frontend/pc && npm run dev


# MySQL
in-mysql:
	docker-compose exec mysql bash

# Redis
in-redis:
	docker-compose exec redis bash

# nginx
in-nginx:
	docker-compose exec nginx bash

# Git
git-delete-branch:
	git branch --merged|egrep -v '\*|development|main'|xargs git branch -d