import { Request, Response } from 'express'
import { createProducer, deactivateProducer, selectProducers, updateProducer } from '../controllers/producerController'
import { validateCpfCnpj } from '../utils/validation'

export const addProducer = async (req: Request, res: Response): Promise<void> => {
  try {
    const producerData = req.body

    // Validate CPF/CNPJ
    if (!validateCpfCnpj(producerData.cpfCnpj)) {
      res.status(400).json({ error: 'Invalid CPF/CNPJ' })
      return
    }

    const newProducer = await createProducer(producerData)
    res.status(201).json({ result: 'Record created successfully', record: newProducer })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const editProducer = async (req: Request, res: Response): Promise<void> => {
  try {
    const producerData = req.body
    const updated = await updateProducer(producerData)

    if (!updated) throw new Error('Unable to update record')

    res.status(201).json({ result: 'Record updated successfully', record: producerData })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const deleteProducer = async (req: Request, res: Response): Promise<void> => {
  try {
    const producerId = req.body.cpfCnpj
    const deleted = await deactivateProducer(producerId)

    if (!deleted) throw new Error('Unable to delete record')

    res.status(201).json({ result: 'Record successfully deleted' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const listProducers = async (req: Request, res: Response): Promise<void> => {
  try {
    const producers = await selectProducers()

    res.status(201).json(producers)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
