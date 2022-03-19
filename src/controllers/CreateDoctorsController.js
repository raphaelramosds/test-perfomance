const { json } = require("express/lib/response");
const { v4 } = require("uuid");
const { User, Doctor } = require("../models");

class CreateDoctorsController {
  async handle(req, res) {
    const { 
      name, 
      username, 
      email, 
      role_id,
      crm
    } = req.body;

    const user = await User.create({
      id: v4(),
      name: name,
      email: email,
      username: username,
      role_id: role_id
    });

    const doctor = await Doctor.create({
      id: v4(),
      crm: crm,
      user_id: user.id
    });

    // [1:1] ache o Doctor que contenha o id do User
    const myDoctor = await Doctor.findOne({
      where: {
        crm: crm
      },
      include: User
    });

    return res.json(myDoctor);

  }
}

module.exports = new CreateDoctorsController;