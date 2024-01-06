import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { createServer } from 'http'
import producerRoutes from './routes/producerRoutes'

dotenv.config()
const app = express()
const server = createServer(app)

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/api', producerRoutes)

// Add other middleware, routes, and configurations as needed

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err)
  process.exit(1)
})
