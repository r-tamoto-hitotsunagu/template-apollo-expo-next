CP         := cp
ifeq ($(OS),Windows_NT)
    ifeq ($(MSYSTEM),)
        CP         := copy
    endif
endif

setup-start:
	@make cp-all
	@make start-init

cp-all:
	@make cp-envs
	@make cp-git-setting

start-init:
	@make start-build
	@make start-infra-init
	@make setup-all
	@make start-app-init

start:
	@make start-infra
	@make setup-all
	@make start-app

restart:
	@make down-all
	@make start


setup-all:
	@make root-setup
	@make gql-setup
	@make mobile-setup
	@make pc-setup

cp-envs:
	@make root-cp-env
	@make gql-cp-env
	@make mobile-cp-env


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
start-build:
	docker-compose build
start-infra-init:
	docker-compose up redis mysql -d
start-infra:
	docker-compose up redis mysql --build -d
start-app-init:
	docker-compose up gql nginx -d
start-app:
	docker-compose up gql nginx --build -d
down-all:
	docker-compose down

# Docker
docker-restart:
	docker-compose down && docker-compose up --build -d

# Root
root-setup:
	npm i
root-cp-env:
	$(CP) .env.example .env

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
gql-cp-env:
	$(CP) ./apps/backend/gql/.env.example ./apps/backend/gql/.env


# mobile
mobile-setup:
	cd ./apps/frontend/mobile && npm i
mobile-run:
	cd ./apps/frontend/mobile && npm run dev
mobile-sync-schema:
	cd ./apps/frontend/mobile && npm run codegen
mobile-sync-zod:
	$(CP) -r ./apps/backend/gql/src/generated/zod ./apps/frontend/mobile/src/__generated__/
mobile-cp-env:
	$(CP) ./apps/frontend/mobile/env.example.ts ./apps/frontend/mobile/env.ts

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
	$(CP) .githooks/pre-commit .git/hooks/pre-commit
