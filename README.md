# MonorepoLite< Apollo, Expo, Next.js>

## 🚀 Getting started
```
$ make setup-start

# 以下のコマンド郡は別々のターミナルで実行
$ make gql-run

# apps/frontend/mobile/.env.ts の `API_DOMAIN` を自身のIP Addressに変更して実行
$ make mobile-run

$ make pc-run
```

2回目以降は `$ make restart` にて実行

| ----   | uri                            | feature                       |
|--------|-------------------------------|-------------------------------|
| gql    | http://localhost/graphql | docker [nginx->gql] ref: dist |
| gql    | http://localhost:3000/graphql | local                         |
| gql    | http://localhost:4000/graphql | docker [gql] ref: dist        |
| expo   | http://localhost:19002        | -                             |
| Next.js | http://localhost:3300         | -                             |

## 🤖 How to sync all
`$ make sync-all` を実行する事で、backendとfrontendの共用ファイルを同期する事が出来ます  
syncを個別に実行する場合は、次の How to sync xxx を確認してください


## 🎨 How to sync schemas
### Backend
`$ make gql-run` を実行している場合、ソースコードの変更を検知し、自動でschemaへの同期が実行されます

### Front
`$ make sync-schema` を実行する事で、mobile, pc側のschema定義が更新されます  
また、Front側で使用する GraphQL Document ( mutation, query, subscription ) を変更した場合も、`$ make sync-schema` を実行し 、Front側のschema定義を更新しましょう  
なお、BackendのSchema定義とFrontの GraphQL Document の整合性が合わない場合は、Command実行時に `GraphQLDocumentError` が発生するので、整合性エラーの検知にも使用する事が出来ます

## ⛓ How to sync validate
`$ make sync-zod` を実行する事で、mobile, pc側のzod定義が更新されます  
Prismaの schema.prisma を更新した際に同期させる事が多いので、その場合は `$ make generate-prisma` を実行して下さい  
Prisma ClientのCode生成とFront側のzod定義の更新が同時に実行されます

## 🛠️ How to run generator
`$ make gen-plop` を実行することで、事前に定義した雛形を利用できます  
雛形を追加する場合は、`tools/scaffolding` 配下に作成してください