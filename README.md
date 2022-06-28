# Node project

## Description:

A simple backend project that includes: endpoints with different requests, working with users, and working with the database.

## Used Stack:

- `Koa` is pretty similar to `express`, was written by the same group of programmers, and this framework has solved problems that `express` has.
- `JavaScript` is used instead `TypeScript` because the project is pretty small and should be done really quickly. In production it will be better to use `TypeScript`.
  Used simple sql requests for making queries to the database.
- A cloud-hosted Postgres instance by [ElephantSql](https://www.elephantsql.com/) was chosen as the database solution to host just a few tables as it is free for small projects, and easy to deploy and maintain.
- For formatting let's use [ESlint](https://eslint.org/) which will include plugin [Prettier](https://prettier.io/).
- A cloud-hosted koa-server instance by [Heroku](https://dashboard.heroku.com), because its easy to host simple web-server from gihub-repository, which can auto-deploy after new commit comes 
## Environment vars that should be set:

```sh
export DB_URL=postgres://YourPostgresUser:YourPostgresPassword@YourPostgresHost:YourPostgresPort/lab
export PORT=3000
```

## Database

**Users**

| id   | name | password | login   |
| ---- | -------- | -------- | ------- |
| int8 | string   | string   | string  |

## API Endpoints description

| METHOD | ENDPOINT            | GROUP                     | DESCRIPTION                                                                                                                           |
| ------ | ------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/users/:id`            | [public]                  | get user by its id.                                                                                                       |
| POST   | `/users`            | [public] | create new user                                                            
| PUT    | `/users/:id`        | [public] | update an existing user by its id                                                                                         |
| GET | `/prices`        | [public] | get prices for most popular cryptocurrency                                                                                       |