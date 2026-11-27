import { test } from 'node:test'
import assert from 'node:assert/strict'
import request from 'supertest'
import app from '../src/app.js'

// Simula richieste HTTP con dati non validi e verifica che l'API risponda 400

test('Rifiuta un priceCents non intero', async () => {
  const response = await request(app).put('/api/services/1').send({
    name: 'Servizio di prova',
    description: 'Descrizione di prova',
    priceCents: '2500',
    durationMin: 30,
    categoryId: 1
  })

  assert.equal(response.status, 400)
})
test('Rifiuta durationMin non intero', async () => {
  const response = await request(app).put('/api/services/1').send({
    name: 'Servizio di prova',
    description: 'Descrizione di prova',
    priceCents: 2500,
    durationMin: '30',
    categoryId: 1
  })

  assert.equal(response.status, 400)
})
test('Rifiuta categoryId non intero', async () => {
  const response = await request(app).put('/api/services/1').send({
    name: 'Servizio di prova',
    description: 'Descrizione di prova',
    priceCents: 2500,
    durationMin: 30,
    categoryId: '1'
  })

  assert.equal(response.status, 400)
})
test('Rifiuta name vuoto', async () => {
  const response = await request(app).put('/api/services/0').send({
    name: '',
    description: 'Descrizione di prova',
    priceCents: 2500,
    durationMin: 30,
    categoryId: 1
  })

  assert.equal(response.status, 400)
})
// Verifica che anche POST utilizzi lo stesso middleware di validazione di PUT
test('POST Rifiuta name vuoto', async () => {
  const response = await request(app).post('/api/services').send({
    name: '',
    description: 'Descrizione di prova',
    priceCents: 2500,
    durationMin: 30,
    categoryId: 1
  })

  assert.equal(response.status, 400)
})
