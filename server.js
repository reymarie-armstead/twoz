const next = require('next')
const dotenv = require('dotenv')
const routes = require('./routes')
const { createServer } = require('http')

dotenv.load()

const { PORT, NODE_ENV: environment } = process.env
const dev = environment === 'development'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on port: ${PORT}`)
  })
})
