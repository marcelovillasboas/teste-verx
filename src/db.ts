import pgPromise from 'pg-promise'
import dotenv from 'dotenv'

dotenv.config()

const {
  POSTGRES_PASSWORD: password,
  POSTGRES_PORT: port,
  POSTGRES_USER: user,
  POSTGRES_HOST: host,
  POSTGRES_DATABASE: database
} = process.env

const pgp = pgPromise({})
const dbConfig = {
  host,
  port: Number(port),
  database,
  user,
  password
}
const db = pgp(dbConfig)

export default db
