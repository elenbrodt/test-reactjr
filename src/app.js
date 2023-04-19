const express = require("express");
const db = require("./database");
const routes = require("./routes");
const cors = require("cors");

const app = express();
db.hasConection();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log("Servidor conectado"));
