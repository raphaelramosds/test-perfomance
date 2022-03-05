const { Router } = require("express");

const CreateDoctorController = require("./controllers/CreateDoctorController");
const CreatePatientController = require("./controllers/CreatePatientController")

const router = Router();

router.post("/patients", CreatePatientController.handle);
router.post("/doctors", CreateDoctorController.handle)

module.exports = router;