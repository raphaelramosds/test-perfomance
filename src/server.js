const { json } = require("express");
const express = require("express");
const router = require("./routes");

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const app = express();

app.use(json());
app.use(router);

// dividir carga de processos
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    // criar workers (processos filhos)
    cluster.fork();
  } 
} else {
  app.listen(3333);
}
