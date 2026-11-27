import { Router } from 'express'
import { index, show, store, update, destroy } from '../controller/services.controller.js'
import { validateService } from '../middleware/services.validation.js'

const router = Router()

router.get('/', index)

router.get('/:id', show)

router.post('/', validateService, store)

router.put('/:id', validateService, update)

router.delete('/:id', destroy)

export default router
