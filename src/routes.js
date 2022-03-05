const { Router } = require("express");

const CreateAppointmentController = require("./controllers/CreateAppointmentController");
const CreateDoctorController = require("./controllers/CreateDoctorController");
const CreatePatientController = require("./controllers/CreatePatientController")

const router = Router();

router.post("/patients", CreatePatientController.handle);
router.post("/doctors", CreateDoctorController.handle)
router.post("/appointments", CreateAppointmentController.handle);

module.exports = router;