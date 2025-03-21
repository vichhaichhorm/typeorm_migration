step one
1- npm init --y
2- tsc --init
make sure you are using typescript version 3.3 or higher
"experimentalDecorators" : true
"emitDecoratorMetadata" : true
3- npm i express @types/express nodemon ts-node @types/node typescript
4- npm i mysql2 typeorm reflect-metadata
5- npm i dotenv

Entity inheritance

1. concreate table inheritance
   single table inheritance

Post (id title description viewCount)
photo (id title desc size )


question
id
title
descrition
questCount
