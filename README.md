# fresh project

### commands

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno task start
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net  cli/create_table.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net  cli/drop_tables.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net cli/add.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net db_services/artilces/getone.cli.ts
```
