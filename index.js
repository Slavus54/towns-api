require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const Centum = require('centum.js')
const towns = require('./api/towns.json')

const centum = new Centum()
const DEFAULT_PERCENT = 60
const PORT = process.env.PORT

// middlewares

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.sendStatus(200)
})

app.get('/towns', async (req, res) => {
    res.send(towns)
})

app.post('/town', async (req, res) => {
    let {title} = req.body
    let percent = req.body.percent === undefined ? DEFAULT_PERCENT : req.body.percent

    let town = towns.find(el => centum.search(el.title, title, percent))

    if (town !== undefined) {
        res.send(town)
    } else {
        res.send(null)
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))