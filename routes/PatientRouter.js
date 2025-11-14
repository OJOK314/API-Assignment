const express = require('express')
const router = express.Router()

const patientController = require('../controller/PatientsController')



router.get('/', patientController.getAllPatients)
router.post('/login', patientController.loginPatient)

module.exports = router