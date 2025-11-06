const express = require('express')
const HospitalsRouter = require('./routes/hospitalsRouter')



const app  = express()

//middleware
app.use(express.json())

app.get('/api/v1/' ,(req,res) =>{
    res.send('please check our server')

})

//middleware
 app.use('/api/v1/Hospitals', HospitalsRouter)

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})