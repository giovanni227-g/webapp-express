import { Router } from 'express'
import { index, show } from '../controller/services.controller.js'

const router = Router()

router.get('/', index)

router.get('/:id', show)

router.post('/', (req, res) => {
  res.send('POST - Creazione di un nuovo servizio')
})

router.put('/:id', (req, res) => {
  res.send(`PUT - Modifica del servizio ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`DELETE - Eliminazione del servizio ${req.params.id}`)
})

export default router
