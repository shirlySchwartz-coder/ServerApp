const express = require('express');
const router = express.Router();
const netLogic = require("../logic/net-logic")

router.get('/', async (request, response, next) => {

  try {
    let netsList = await netLogic.getAllNets();
    response.json(netsList);
  }
  catch(error) {
    return next(error);
  }
});

router.post("/status", async (request, response, next) => {
  // Extracting the JSON from the packet's BODY
  let currentServerStatus = request.body;
  
  let currentTime = new datetime("2022-05-05 12:12:00");
  console.log(currentServerStatus);

  try {
      await netLogic.changeStatus(currentServerStatus);
      response.json();
  }
  catch (e) {
      console.error(e);
      response.status(600).send(e.message)
  }
});


module.exports = router;