const { v4 } = require("uuid");
const { Doctor } = require("../models");

class CreateDoctorController {
  async handle(req, res) {
    
    const { name, email, crm } = req.body;

    const doctor = await Doctor.create({
      id: v4(),
      name: name,
      email: email,
      crm: crm
    })

    return res.json(doctor);

  }
}

module.exports = new CreateDoctorController;