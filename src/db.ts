import pgPromise from 'pg-promise'
import dotenv from 'dotenv'

dotenv.config()

// const { POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER: user, POSTGRES_HOST: host, POSTGRES_DATABASE: database } = process.env

const pgp = pgPromise({})
const dbConfig = {
  host: 'localhost',
  port: Number('5432'),
  database: 'postgres',
  user: 'postgres',
  password: 'postgrespass'
}
const db = pgp(dbConfig)

export default db
