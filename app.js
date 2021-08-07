const express = require ('express')
const db = require ('./model/db')
const userroutes = require('./routes/user')

const app = express()
app.use(express.json())

app.use(userroutes)

app.listen(3010,()=>{
    console.log('server is running in port 3010')
})