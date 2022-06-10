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
`$ make gql-run` を実行している場合、ソースコードの変更を検知し、自動でschemaへの同期が実行されます

### Front
`$ make sync-schema` を実行する事で、mobile, pc側のschema定義が更新されます
また、Front側で使用する GraphQL Document ( mutation, query, subscription ) を変更した場合も、`$ make sync-schema` を実行し 、Front側のschema定義を更新しましょう
なお、BackendのSchema定義とFrontの GraphQL Document の整合性が合わない場合は、Command実行時に `GraphQLDocumentError` が発生するので、整合性エラーの検知にも使用する事が出来ます