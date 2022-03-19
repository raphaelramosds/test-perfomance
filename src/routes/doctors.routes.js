const { Router } = require("express");
const CreateDoctorsController = require("../controllers/CreateDoctorsController");

const doctors = Router();

doctors.post("/", CreateDoctorsController.handle);

module.exports = doctors;
