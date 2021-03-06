# MonorepoLite< Apollo, Expo, Next.js>

## ð Getting started
```
$ make setup-start

# ä»¥ä¸ã®ã³ãã³ãé¡ã¯å¥ãã®ã¿ã¼ããã«ã§å®è¡
$ make gql-run

# apps/frontend/mobile/.env.ts ã® `API_DOMAIN` ãèªèº«ã®IP Addressã«å¤æ´ãã¦å®è¡
$ make mobile-run

$ make pc-run
```

2åç®ä»¥éã¯ `$ make restart` ã«ã¦å®è¡

| ----   | uri                            | feature                       |
|--------|-------------------------------|-------------------------------|
| gql    | http://localhost/graphql | docker [nginx->gql] ref: dist |
| gql    | http://localhost:3000/graphql | local                         |
| gql    | http://localhost:4000/graphql | docker [gql] ref: dist        |
| expo   | http://localhost:19002        | -                             |
| Next.js | http://localhost:3300         | -                             |

## ð¤ How to sync all
`$ make sync-all` ãå®è¡ããäºã§ãbackendã¨frontendã®å±ç¨ãã¡ã¤ã«ãåæããäºãåºæ¥ã¾ã  
syncãåå¥ã«å®è¡ããå ´åã¯ãæ¬¡ã® How to sync xxx ãç¢ºèªãã¦ãã ãã


## ð¨ How to sync schemas
### Backend
`$ make gql-run` ãå®è¡ãã¦ããå ´åãã½ã¼ã¹ã³ã¼ãã®å¤æ´ãæ¤ç¥ããèªåã§schemaã¸ã®åæãå®è¡ããã¾ã

### Front
`$ make sync-schema` ãå®è¡ããäºã§ãmobile, pcå´ã®schemaå®ç¾©ãæ´æ°ããã¾ã  
ã¾ããFrontå´ã§ä½¿ç¨ãã GraphQL Document ( mutation, query, subscription ) ãå¤æ´ããå ´åãã`$ make sync-schema` ãå®è¡ã ãFrontå´ã®schemaå®ç¾©ãæ´æ°ãã¾ããã  
ãªããBackendã®Schemaå®ç¾©ã¨Frontã® GraphQL Document ã®æ´åæ§ãåããªãå ´åã¯ãCommandå®è¡æã« `GraphQLDocumentError` ãçºçããã®ã§ãæ´åæ§ã¨ã©ã¼ã®æ¤ç¥ã«ãä½¿ç¨ããäºãåºæ¥ã¾ã

## â How to sync validate
`$ make sync-zod` ãå®è¡ããäºã§ãmobile, pcå´ã®zodå®ç¾©ãæ´æ°ããã¾ã  
Prismaã® schema.prisma ãæ´æ°ããéã«åæãããäºãå¤ãã®ã§ããã®å ´åã¯ `$ make generate-prisma` ãå®è¡ãã¦ä¸ãã  
Prisma Clientã®Codeçæã¨Frontå´ã®zodå®ç¾©ã®æ´æ°ãåæã«å®è¡ããã¾ã

## ð ï¸ How to run generator
`$ make gen-plop` ãå®è¡ãããã¨ã§ãäºåã«å®ç¾©ããéå½¢ãå©ç¨ã§ãã¾ã  
éå½¢ãè¿½å ããå ´åã¯ã`tools/scaffolding` éä¸ã«ä½æãã¦ãã ãã