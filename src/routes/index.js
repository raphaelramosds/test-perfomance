const { Router } = require("express");
const router = Router();

const users = require("./users.routes");

router.use("/users", users);

module.exports = router;