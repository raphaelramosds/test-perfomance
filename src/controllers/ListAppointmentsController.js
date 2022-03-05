const { Appointment } = require("../models");

class ListAppointmentsController {
  async handle(req, res) {
    const { id, flag } = req.body;
    const appointments = await Appointment.findAll();
    return res.json(appointments);
  }
}

module.exports = new ListAppointmentsController;