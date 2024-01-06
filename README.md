### API TESTE VERX

# Node.js PostgreSQL API for Rural Producers

This is a Node.js API project using PostgreSQL to manage information about rural producers. The API provides endpoints to list, delete, edit and create producer records

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
    "culturas_plantadas": ["Soy", "Corn"],
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
    "cpf_cnpj": "12345678901",
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