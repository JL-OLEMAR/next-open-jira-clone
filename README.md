# Next.js OpenJira App

To run locally, you need the database; the -d, means **detached**.

```bash
docker-compose up -d
```

- MongoDB Local URL ⚓: `mongodb://localhost:27017/entriesdb`

## Setting environment variables

Rename file **.env.example** to **.env.local**

## Filling the db with test information

Temporary endpoint: `http://localhost:3000/api/seed`
