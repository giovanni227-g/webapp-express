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

## Rotte API

| Metodo | Rotta               | Descrizione                                        | Successo |
| ------ | ------------------- | -------------------------------------------------- | -------- |
| GET    | `/api/services`     | Restituisce la lista di tutti i servizi            | `200`    |
| GET    | `/api/services/:id` | Restituisce il servizio con l'id indicato          | `200`    |
| POST   | `/api/services`     | Crea un nuovo servizio                             | `201`    |
| PUT    | `/api/services/:id` | Modifica il servizio con l'id indicato             | `200`    |
| DELETE | `/api/services/:id` | Elimina il servizio e restituisce i dati eliminati | `200`    |

Body richiesto da `POST` e `PUT`:

```json
{
  "name": "Taglio donna",
  "description": "Taglio e piega",
  "priceCents": 3500,
  "durationMin": 45,
  "categoryId": 1
}
```

Risposte di errore (sempre JSON con il campo `error`):

| Status | Quando                            |
| ------ | --------------------------------- |
| `400`  | Dati non validi o JSON malformato |
| `404`  | Servizio non trovato              |
| `500`  | Errore interno del server         |
