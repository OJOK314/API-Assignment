const express = require('express')
const router = express.Router()

const HospitalsController = require('../controller/HospitalsController')

router.get('/', HospitalsController.getAllHospitals)

// router.get('/', (req,res)=>{
//     res.send(req.query)
// })

router.post('/',HospitalsController.createNewHospital)

 module.exports = router;



















// const express = require('express')
// const router = express.Router()

// const controller = require('../controller/HospitalsController')

// router.get('/', controller.getAllHospitals)
// router.post('/', controller.createNewHospital)

// module.exports = router

