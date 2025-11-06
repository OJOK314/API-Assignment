const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

const getAllHospitals = async (req,res) =>{
   let data = await prisma.hospital.findMany()
  res.send(data)
 }

 const createNewHospital = async (req,res) => {
   const {name, treatment} = req.body
   let newHospital = await prisma.hospital.create({
    data: {name,treatment} 
  })
  res.send(newHospital)
}

module.exports = {
    getAllHospitals,
    createNewHospital
}
