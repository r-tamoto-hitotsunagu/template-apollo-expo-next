setup-start:
	@make cp-all
	@make restart

cp-all:
	@make cp-envs
	@make cp-git-setting

restart:
	@make down-all
	@make start-infra
	@make setup-all
	@make start-app

setup-all:
	@make root-setup
	@make gql-setup
	@make mobile-setup
	@make pc-setup

cp-envs:
	cp .env.example .env
	cp ./apps/backend/gql/.env.example ./apps/backend/gql/.env


## common
sync-all:
	@make sync-schema
	@make sync-zod

sync-schema:
	@make mobile-sync-schema

generate-prisma:
	@make gql-generate-prisma
	@make sync-zod

sync-zod:
	@make mobile-sync-zod

gen-plop:
	npm run generate:plop


# Run Script
restart:
	@make docker-build-up
start-infra:
	docker-compose up redis --build -d
	docker-compose up mysql --build -d
start-app:
	docker-compose up gql nginx --build -d
down-all:
	docker-compose down

# Docker
docker-build-up:
	docker-compose down && docker-compose up --build -d

# Root
root-setup:
	npm i

# GraphQL
in-gql:
	docker-compose exec gql bash
gql-build:
	npm run dev -w apps/backend/gql
gql-setup:
	cd ./apps/backend/gql && npm i
	cd ./apps/backend/gql && npm run prisma-generate
	cd ./apps/backend/gql && npm run prisma-deploy
	cd ./apps/backend/gql && npm run build
gql-run:
	cd ./apps/backend/gql && npm run dev
gql-generate-prisma:
	cd ./apps/backend/gql && npm run prisma-generate


# mobile
mobile-setup:
	cd ./apps/frontend/mobile && npm i
mobile-run:
	cd ./apps/frontend/mobile && npm run dev
mobile-sync-schema:
	cd ./apps/frontend/mobile && npm run codegen
mobile-sync-zod:
	cp -r ./apps/backend/gql/src/generated/zod ./apps/frontend/mobile/src/__generated__/


# pc
pc-setup:
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
cp-git-setting:
	cp .githooks/pre-commit .git/hooks/pre-commit
