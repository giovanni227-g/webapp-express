import express from 'express'
import servicesRouter from './routes/services.routes.js'
import cors from 'cors'

const app = express() // Crea l'app Express su cui registriamo middleware e rotte

app.use(cors()) // Permette fetching tra BE e FE

app.use(express.json()) // Converte il body JSON della richiesta in req.body, così i controller possono leggerlo

// Rotta base che conferma che l'API è attiva
app.get('/', (req, res) => {
  res.send('Alex & Maty Dashboard API')
})

app.use('/api/services', servicesRouter) // Inoltra le richieste /api/services al router dei servizi

app.use((req, res) => {
  res.status(404).send('Rotta non trovata') // Se nessuna rotta precedente risponde, restituisce 404
})

// Gestisce in un solo punto gli errori prodotti durante l'esecuzione
app.use((err, req, res, next) => {
  if (err.code === 'P2025') {
    return res.status(404).json({
      error: 'Servizio non trovato'
    })
  }
  // Verifica se il formato JSON è valido, in alternativa dà codice errore corretto: 400 e non 500
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: 'Formato JSON non valido'
    })
  }
  return res.status(500).json({
    error: 'Errore interno del server'
  })
})

export default app
