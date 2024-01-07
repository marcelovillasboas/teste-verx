import { Request, Response } from 'express'
import {
  calculateCulturesFrequency,
  calculateFarmsByState,
  calculateFarmsTotalArea,
  calculateSoilUsage,
  countFarms,
  createProducer,
  deactivateProducer,
  selectProducers,
  updateProducer
} from '../controllers/producerController'
import { validateArea, validateCpfCnpj } from '../utils/validation'
import { Producer } from 'src/models/producerModel'

export const addProducer = async (req: Request, res: Response): Promise<void> => {
  try {
    const producerData = req.body

    if (!validateCpfCnpj(producerData.cpfCnpj)) {
      res.status(400).json({ error: 'Invalid CPF/CNPJ' })
      return
    }

    const { areaAgricultavelHa, areaTotalHa, areaVegetacaoHa } = producerData as Producer
    if (!validateArea({ areaAgricultavelHa, areaTotalHa, areaVegetacaoHa })) {
      res.status(400).json({ error: 'Invalid area input' })
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

export const listProducers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const producers = await selectProducers()

    res.status(201).json(producers)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const countTotalFarms = async (_req: Request, res: Response): Promise<void> => {
  try {
    const totalFarms = await countFarms()

    res.status(201).json({ FazendasTotal: totalFarms })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const calculateTotalArea = async (_req: Request, res: Response): Promise<void> => {
  try {
    const totalArea = await calculateFarmsTotalArea()

    res.status(201).json({ totalArea })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const calculateStates = async (_req: Request, res: Response): Promise<void> => {
  try {
    const states = await calculateFarmsByState()

    res.status(201).json(states)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const calculateCultures = async (_req: Request, res: Response): Promise<void> => {
  try {
    const rawCultures = await calculateCulturesFrequency()
    const cultureFrequency: { [key: string]: number } = {}
    rawCultures.forEach((rawCulture) => {
      rawCulture.culturas_plantadas.forEach((culture) => {
        cultureFrequency[culture] = (cultureFrequency[culture] || 0) + Number(rawCulture.frequencia)
      })
    })

    const cultures = Object.keys(cultureFrequency).map((culture) => ({
      culture,
      frequency: cultureFrequency[culture]
    }))

    res.status(201).json(cultures)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const calculateSoil = async (_req: Request, res: Response): Promise<void> => {
  try {
    const soilUsage = await calculateSoilUsage()

    res.status(201).json(soilUsage)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
