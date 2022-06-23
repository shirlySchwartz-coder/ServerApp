const express = require("express");
const cors = require('cors');
const netController = require("./controllers/net-controller");
const server = express();

server.use(cors({ origin: "http://localhost:3000"}));
server.use(express.json());
server.use("/api/servers", netController);


server.listen(3001, () => console.log("Listening on http://localhost:3001"));