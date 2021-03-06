const express = require('express')
const routes = require('./routes')
const routerUpload = require('./routerUpload')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(routerUpload)

//--------------------------------------
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})



//catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})


app.listen(3002, () => console.log('server is running 3002'))
