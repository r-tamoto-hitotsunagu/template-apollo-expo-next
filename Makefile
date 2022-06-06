# Quick Start
quick-start:
	@make init
	@make start

## common
init:
	@make cp-envs
#	@make root-init
	@make gql-init

cp-envs:
	cp .env.example .env
	cp ./apps/backend/gql/.env.example ./apps/backend/gql/.env

generate:
	npm run codegen

# Run Script
start:
	@make docker-build-up
	npm run dev

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
	# npm i
	npm run prisma-generate -w apps/backend/gql
	npm run prisma-deploy -w apps/backend/gql
	npm run build -w apps/backend/gql

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