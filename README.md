# Prisma

## Installing Prisma

$ npm i --save-dev prisma typescript nodemon ts-node @types/node
$ npx prisma init --datasource-provider postgresql
$ npm i --save @prisma/client

- Install Prisma VSCode extension
- Having Prisma formatter with `settings.json`:

```
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true
  }
```

## Installing with [Homebrew](https://wiki.postgresql.org/wiki/Homebrew)

- Install with homebrew
  $ brew install postgresql
  $ brew services start postgresql@14

- Have it not restart at boot time:
  $ brew services run postgresql

- Starting connection to PostgreSQL... or Using PgAdmin
  $ psql postgres

## Installing with [Postgres App](https://postgresapp.com/)

## Using Prisma

- Run migration or create database: `npx prisma migrate dev --name init`
- Generate client again: `npx prisma generate`

## Reset database

- Inside `script.ts`, we can use `await prisma.user.deleteMany()`
- If migration is needed, run `npx prisma migrate dev`