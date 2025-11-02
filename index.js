const express = require('express')
const app  = express()
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()

// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()


app.get('/' ,(req,res) =>{
    res.send('please check our server')

})

app.get('/Hopitals', async (req,res) =>{
  let data = await prisma. hospital.findMany()
  res.send()
})

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})