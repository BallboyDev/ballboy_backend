const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const routes = require('./routes')

const app = express()
app.set('port', process.env.NODE_PORT || 3290)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/***************************/
/*********** API ***********/
/***************************/
app.use('/', routes.baseRoute)

app.use('/test', routes.testRoute)


/***************************/
/********** ERROR **********/
/***************************/
app.use((err, req, res, next) => {
    res.status(500).json({ err: 'error' })
})

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중....`)
})