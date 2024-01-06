import db from '../db'
import { Producer } from '../models/producerModel'

export const createProducer = async (producerData: Producer): Promise<Producer> => {
  const newProducer = await db.one(
    'INSERT INTO producers (cpf_cnpj, nome_produtor, nome_fazenda, cidade, estado, area_total_hectares, area_agricultavel_hectares, area_vegetacao_hectares, culturas_plantadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
    [
      producerData.cpfCnpj,
      producerData.nomeProdutor,
      producerData.nomeFazenda,
      producerData.cidade,
      producerData.estado,
      producerData.areaTotalHa,
      producerData.areaAgricultavelHa,
      producerData.areaVegetacaoHa,
      producerData.culturasPlantadas
    ]
  )
  return newProducer
}

export const updateProducer = async (updatedData: Producer): Promise<boolean> => {
  const updateProducer = await db.result('UPDATE producers SET cpf_cnpj = $2, nome_produtor = $3, nome_fazenda = $4, cidade = $5, estado = $6, area_total_hectares = $7, area_agricultavel_hectares = $8, area_vegetacao_hectares = $9, culturas_plantadas = $10 WHERE cpf_cnpj = $1 AND active = true',
    [updatedData.cpfCnpj, ...Object.values(updatedData)])

  return updateProducer.rowCount > 0
}

export const deactivateProducer = async (producerId: Producer['cpfCnpj']): Promise<boolean> => {
  const deletedProducer = await db.result('UPDATE producers SET active = false WHERE cpf_cnpj = $1', [producerId])

  return deletedProducer.rowCount > 0
}

export const selectProducers = async (): Promise<Producer[]> => {
  try {
    const activeProducers = await db.any<Producer>('SELECT cpf_cnpj, nome_produtor, nome_fazenda, cidade, estado, area_total_hectares, area_agricultavel_hectares, area_vegetacao_hectares, culturas_plantadas FROM producers WHERE active = true')

    return activeProducers
  } catch (e) {
    console.error('Error getting producers list', e)
    throw e
  }
}
