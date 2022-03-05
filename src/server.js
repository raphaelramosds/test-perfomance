const { json } = require("express");
const express = require("express");
const router = require("./routes");

const app = express();

app.use(json());

app.use(router);

app.listen(8000);