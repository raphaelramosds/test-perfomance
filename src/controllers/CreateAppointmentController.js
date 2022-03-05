const { v4 } = require("uuid");
const { Appointment } = require("../models"); 

class CreateAppointmentController {
  async handle(req, res) {
    const { id_doctor, id_patient, date } = req.body;
    const appointment = await Appointment.create({
      id: v4(),
      id_doctor: id_doctor,
      id_patient: id_patient,
      date: date
    });

    return res.json(appointment);
  }
}

module.exports = new CreateAppointmentController;