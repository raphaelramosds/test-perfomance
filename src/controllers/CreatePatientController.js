const { v4 } = require("uuid");
const { Patient } = require("../models");

class CreatePatientController {
  async handle(req, res) {
    
    const { name, email } = req.body;

    const patient = await Patient.create({
      id: v4(),
      name: name,
      email: email
    })

    return res.json(patient);

  }
}

module.exports = new CreatePatientController;