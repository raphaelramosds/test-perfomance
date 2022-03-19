const { Router } = require("express");

const doctors = require("./doctors.routes");
const router = Router();

const users = require("./users.routes");

router.use("/users", users);
router.use("/doctors", doctors);

module.exports = router;