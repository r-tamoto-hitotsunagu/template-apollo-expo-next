# MonorepoLite< Apollo, Expo, Next.js>

## 🚀 Getting started
```
$ make quick-start

# 以下のコマンドは別々のターミナルで実施
$ make gql-run
$ make mobile-run
$ make pc-run
```

| ----   | uri                            | feature                       |
|--------|-------------------------------|-------------------------------|
| gql    | http://localhost/graphql | docker [nginx->gql] ref: dist |
| gql    | http://localhost:3000/graphql | local                         |
| gql    | http://localhost:4000/graphql | docker [gql] ref: dist        |
| expo   | http://localhost:19002        | -                             |
| Next.js | http://localhost:3300         | -                             |

## How to sync schemas
### Backend
GraphQL側は `$ make gql-run` を実行している場合、ソースコードの変更を検知し、自動でschemaの同期が実行されます

### Front
Front側は `$ make sync-schema` を実行する事で、mobile, pc側のschema定義が更新されます
また、Front側で使用する mutation, query, subscription を変更した場合も、`$ make sync-schema` を実行し 、schema定義を更新しましょう