const express = require('express')
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()


const app  = express()

//middleware
app.use(express.json())

app.get('/' ,(req,res) =>{
    res.send('please check our server')

})

app.get('/Hospitals', async (req,res) =>{
  let data = await prisma.hospital.findMany()
  res.send(data)
})


app.post('/Hospitals', async (req,res) => {
  const {name, treatment} = req.body
  let newHospital = await prisma.hospital.create({
  data: {name,treatment} 
  
  })
  res.send(newHospital)

})

//middleware
// app.use('/Hospitals',HospitalRouter)

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})