const express = require("express");

const HospitalsRouter = require("./routes/hospitalsRouter");
const PatientRouter = require('./routes/PatientRouter')

const app = express();

//middleware
app.use(express.json());

// JWT Check

app.get("/api/v1/", (req, res) => {
  res.send("please check our server");
});

//middleware
app.use("/api/v1/Hospitals", HospitalsRouter);
app.use('/api/v1/Patients', PatientRouter)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
