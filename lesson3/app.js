const express = require('express')
const path = require('path')

const apiRouter = require('./router/api.router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(5000,() =>{
    console.log('port 5000 is active')
})

app.use('/', apiRouter)
