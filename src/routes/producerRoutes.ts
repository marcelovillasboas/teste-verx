import express from 'express'
import {
  addProducer,
  calculateCultures,
  calculateSoil,
  calculateStates,
  calculateTotalArea,
  countTotalFarms,
  deleteProducer,
  editProducer,
  listProducers
} from '../services/producerService'

const router = express.Router()

router.post('/create-producer', addProducer)
router.post('/update-producer', editProducer)
router.delete('/delete-producer', deleteProducer)
router.get('/list-producers', listProducers)
router.get('/count-farms', countTotalFarms)
router.get('/total-area', calculateTotalArea)
router.get('/states', calculateStates)
router.get('/cultures', calculateCultures)
router.get('/soil-usage', calculateSoil)

export default router
