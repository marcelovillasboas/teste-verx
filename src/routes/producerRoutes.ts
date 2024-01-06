import express from 'express'
import { addProducer, deleteProducer, editProducer, listProducers } from '../services/producerService'

const router = express.Router()

router.post('/create-producer', addProducer)
router.post('/update-producer', editProducer)
router.post('/delete-producer', deleteProducer)
router.get('/list-producers', listProducers)

export default router
