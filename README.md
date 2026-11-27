# Alex & Maty Dashboard — backend

Backend del progetto finale Boolean per la dashboard interna del salone Alex & Maty.

## Requisiti

- Node.js 20.19+, 22.12+ o 24+
- MySQL

## Configurazione

Il file `.env` deve contenere:

```env
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE"
PORT=3000
```

## Avvio

```bash
pnpm install
pnpm run db:validate
pnpm run db:migrate
pnpm run dev
```

## Comandi

```bash
pnpm start
pnpm run check
pnpm run db:generate
pnpm run db:migrate
pnpm run db:studio
pnpm run db:validate
pnpm test
```
