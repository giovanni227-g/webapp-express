/*
Flusso prima di POST e PUT:
1. legge i dati ricevuti da req.body
2. se un dato è sbagliato, risponde 400 e interrompe la richiesta
3. se tutti i dati sono corretti, next() passa la richiesta al controller
*/
export function validateService(req, res, next) {
  if (!Number.isInteger(req.body.priceCents)) {
    return res.status(400).json({
      error: 'PriceCents non è intero'
    })
  }
  if (!Number.isInteger(req.body.durationMin)) {
    return res.status(400).json({
      error: 'DurationMin non è intero'
    })
  }
  if (!Number.isInteger(req.body.categoryId)) {
    return res.status(400).json({
      error: 'CategoryId non è intero'
    })
  }
  if (typeof req.body.name !== 'string' || req.body.name.trim() === '') {
    return res.status(400).json({
      error: 'Il name è obbligatorio'
    })
  }
  next()
}
