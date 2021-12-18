const router = require("express").Router();
const droneController = require("../controllers/drone");

router.get("/", droneController.viewDrone);

module.exports = router;
