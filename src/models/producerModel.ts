export interface Producer {
    id?: number;
    cpfCnpj: string;
    nomeProdutor: string;
    nomeFazenda: string,
    cidade: string,
    estado: string,
    areaTotalHa: number,
    areaAgricultavelHa: number,
    areaVegetacaoHa: number,
    culturasPlantadas: string[]
    active: boolean
  }
