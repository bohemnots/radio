const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer()

const {
  checkPassword,
  client,
  fromInfo,
  getMetadata,
  updateMetadata
} = require('./mongo')
const live = require('./live')

const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/metadata', (req, res, next) => {
  getMetadata()
    .then(doc => res.json(doc))
    .catch(next)
})

app.patch('/metadata', (req, res, next) => {
  const update = req.body

  if (process.env.PASSWORD) {
    if (req.body.password !== process.env.PASSWORD) {
      return res.status(403).send('forbidden')
    }
  }

  delete req.body.password

  checkPassword(update)
    .then(() => updateMetadata(update).then(newData => res.json(newData)))
    .catch(next)
})

app.get('/', (req, res) => {
  proxy.web(req, res, {
    target: 'https://web-app-md63r9ttv.now.sh',
    secure: true
  })
})

app.use((err, req, res, next) => {
  if (err !== null) {
    res.status(500).send({ status: 'error', message: err.message })
  }
  next()
})

client.connect().then(() => {
  live(fromInfo).then(() => {
    app.listen(port, () => {
      console.log(`port: ${port}`)
    })
  })
})
