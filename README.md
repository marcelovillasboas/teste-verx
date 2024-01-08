### API TESTE VERX

# Node.js PostgreSQL API for Rural Producers

This is a Node.js API project using PostgreSQL to manage information about rural producers. The API provides endpoints to list, delete, edit and create producer records, and also endpoints to fill dashboards on total amount of unique farms, sum of the area of all farms, total farms by state, frequency in which each culture appears and finally soil usage by farm.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/marcelovillasboas/teste-verx
   ```

2. Install dependencies:

   ```bash
   cd teste-verx
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The API will be accessible at `http://localhost:3000`.

## Endpoints

### Create Producer

- **URL:** `/create-producer`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "cpf_cnpj": "12345678901",
    "nome_produtor": "John Doe",
    "nome_fazenda": "Doe Farm",
    "cidade": "City",
    "estado": "ST",
    "area_total_hectares": 100,
    "area_agricultavel_hectares": 80,
    "area_vegetacao_hectares": 20,
    "culturas_plantadas": ["Soy", "Corn"],
    "active": true
  }
  ```

- **Response Body:**

  ```json
  "message": "Record created successfully"
  ```

### Update Producer

- **URL:** `/update-producer`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "cpf_cnpj": "12345678901",
    "nome_produtor": "Updated name",
    "nome_fazenda": "Updated farm",
    "cidade": "Updated City",
    "estado": "Updated state",
    "area_total_hectares": 100,
    "area_agricultavel_hectares": 80,
    "area_vegetacao_hectares": 20,
    "culturas_plantadas": ["Soy", "Corn"]
  }
  ```

- **Response Body:**

  ```json
  "message": "Record updated successfully"
  ```

### Delete Producer

- **URL:** `/delete-producer`
- **Method:** `DELETE`
- **Request Body:**

  ```json
  {
    "cpf_cnpj": "12345678901"
  }
  ```

- **Response Body:**

  ```json
  "message": "Record successfully deleted"
  ```

### List Producers

- **URL:** `/list-producers`
- **Method:** `GET`

- **Response Body:**

  ```json
    {
        "cpf_cnpj": "12345678901",
        "nome_produtor": "Produtor Teste",
        "nome_fazenda": "Fazenda Teste",
        "cidade": "Cidade Teste",
        "estado": "Ts",
        "area_total_hectares": "150.5",
        "area_agricultavel_hectares": "70.5",
        "area_vegetacao_hectares": "25",
        "culturas_plantadas": [
            "Morango",
            "Uvas"
        ]
    },
    ...
  ```

### Count Farms

- **URL:** `/count-farms`
- **Method:** `GET`

- **Response Body:**

  ```json
  {
    "FazendasTotal": 3
  }
  ```

### Total Area

- **URL:** `/total-area`
- **Method:** `GET`

- **Response Body:**

  ```json
  {
    "totalArea": 401.8
  }
  ```

### States

- **URL:** `/states`
- **Method:** `GET`

- **Response Body:**

  ```json
  [
    {
      "estado": "TS",
      "fazendas": "6"
    },
    {
      "estado": "TN",
      "fazendas": "3"
    }
  ]
  ```

### Cultures

- **URL:** `/cultures`
- **Method:** `GET`

- **Response Body:**

  ```json
  [
    {
      "culture": "Banana",
      "frequency": 2
    },
    {
      "culture": "Ameixa",
      "frequency": 1
    },
    {
      "culture": "Maca",
      "frequency": 3
    },
    {
      "culture": "Pera",
      "frequency": 1
    },
    {
      "culture": "Laranja",
      "frequency": 4
    },
    {
      "culture": "Morango",
      "frequency": 1
    },
    {
      "culture": "Uvas",
      "frequency": 1
    }
  ]
  ```

### Soil Usage

- **URL:** `/soil-usage`
- **Method:** `GET`

- **Response Body:**

  ```json
  [
    {
      "nome_fazenda": "Fazenda Teste 2",
      "area_agricultavel": "70.5",
      "area_vegetacao": "25"
    },
    {
      "nome_fazenda": "Fazenda Teste 8",
      "area_agricultavel": "20.6",
      "area_vegetacao": "12"
    },
    {
      "nome_fazenda": "Fazenda Teste 5",
      "area_agricultavel": "61.8",
      "area_vegetacao": "36"
    },
    {
      "nome_fazenda": "Fazenda Teste 4",
      "area_agricultavel": "81.1",
      "area_vegetacao": "33"
    }
  ]
  ```
