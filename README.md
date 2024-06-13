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
- Make sure to run `npx prisma generate` to generate client when models are changed

## Reset database

- Inside `script.ts`, we can use `await prisma.user.deleteMany()`
- If migration is needed, run `npx prisma migrate dev`
- If models are changed, run `npx prisma generate` to repopulate /node_modules/@prisma/client

## Added Samples SQLite DB for testing

- jobs_2023.sqlite and invoices_2023.sqlite, which can be opened with VSCode extension for SQLite
- Optionally, we can convert these 2 SQLite DBs into MySQL or PostgreSQL
- These 2 files can also be converted to CSV to be used by SQLite
- These 2 files can be imported into Browser based SQL engine such as SQLite
