require('dotenv').config()

// files

const towns = require('./api/towns.json')
const timezones = require('./api/timezones.json')
const capitals = require('./api/capitals.json')
const cathedrals = require('./api/cathedrals.json')
const fortresses = require('./api/fortresses.json')

// libs

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const {Codus} = require('codus.js')

const codus = new Codus()

// options

const PORT = process.env.PORT
const length = towns.length  

// middlewares

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.send(`There are ${towns.length} towns`)
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

    let town = towns.find(el => codus.search(el.title, title, process.env.SEARCH_PERCENT, true))

    if (town !== undefined) {
        res.send(town)
    } else {
        res.sendStatus(404)
    }
})

app.get('/timezones', async (_, res) => {
    res.send(timezones)
})

app.get('/capitals', async (_, res) => {
    res.send(capitals)
})

app.get('/cathedrals', async (_, res) => {
    res.send(cathedrals)
})

app.get('/fortresses', async (_, res) => {
    res.send(fortresses)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

function borderCheck(num) {
    return num < 0 || num > length ? 0 : num
}
