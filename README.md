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
npm install
npm run db:validate
npm run db:migrate
npm run dev
```

## Comandi

```bash
npm start
npm run check
npm run db:generate
npm run db:migrate
npm run db:studio
npm run db:validate
```

Il backend espone attualmente la rotta di ingresso `/` e le rotte dimostrative `/api/services`. I modelli Prisma `Category` e `Service` e la migrazione esistente sono mantenuti per non alterare lo stato del database.
