const { PrismaClient } = require('../generated/prisma')
const Prisma = new PrismaClient(); 

 const getAllPatients =  async(req,res)=>{
    let Patients = await Prisma.patient.findMany()
    res.send(Patients)
}
const loginPatient = async (req,res) => {
  
    let Patient = await Prisma.patient.findUnique({
        where:{
            name: req.body.name

        }
    })

    if (Patient) {
        if (Patient.password === res.body.password) {

            
        } else {
            res.send("password is incorrect") 
        }

        
    } else {
        
          res.send('Patient not found')
    }

  
}

module.exports = {
    getAllPatients,
    loginPatient
}