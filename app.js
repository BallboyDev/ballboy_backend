const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const {
    logs
} = require('./utils')
const connect = require('./databases')

dotenv.config()

app.use(cors({
    credentials: true
}))
app.set('port', process.env.NODE_PORT || 3010)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/****************************/
/********* DATABASE *********/
/****************************/
connect()

/***************************/
/*********** API ***********/
/***************************/
app.use('/', routes.baseRoute)

app.use('/test', routes.testRoute)

app.use('/todo', routes.todoRoute)

app.use('/work', routes.workRoute)


/***************************/
/********** ERROR **********/
/***************************/
app.use((err, req, res, next) => {
    res.status(500).json({ err: 'error' })
})

app.listen(app.get('port'), () => {
    logs.log(`server start >>> ${app.get('port')} port`)
})