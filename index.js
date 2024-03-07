require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const Centum = require('centum.js')
const towns = require('./api/towns.json')

const centum = new Centum()

const PORT = process.env.PORT
const length = towns.length

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

app.get('/towns-fragment/:start&:end', async (req, res) => {
    let {start, end} = req.params
    
    start = borderCheck(start)
    end = borderCheck(end)

    let result = towns.slice(start, end)

    res.send(result)
})

app.get('/town/:title', async (req, res) => {
    let {title} = req.params
    let percent = req.body.percent === undefined ? process.env.SEARCH_PERCENT : req.body.percent

    let town = towns.find(el => centum.search(el.title, title, percent, true))

    if (town !== undefined) {
        res.send(town)
    } else {
        res.sendStatus(404)
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

function borderCheck(num) {
    return num < 0 || num > length ? 0 : num
}