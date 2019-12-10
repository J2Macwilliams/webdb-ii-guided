notes.md
# Table Schema Design

Migrations is like Git for DB schemas.

Migrations keep you DB design in sync with the application code.

>Every Change to the DB schema must be recorded in a migration file.

## Migrations

Install the `knex cli`: `yarn global add knex` or `npm i -g knex`

Create a knex configuration file (knexfile.js). Type: `knex init`

Update to teach knex how to connect to db

To create a migration type: `knex migrate:make migrationName`

>I need to make a change to the db structure
>&mdash; a developer

> Make a new

To run a migration type: `knex migrate:latest`

To undo a migration type: `knex migrate:rollback`

## Seeds

To create a seed: `knex seed:make name of seed`

To run seeds: `knex seed:run`

