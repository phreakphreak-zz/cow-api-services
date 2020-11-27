const { Router } = require("express");
const router = Router();
const cows = require("../components/cows/routes");
const users = require("../components/users/routes");
const devices = require("../components/devices/routes");
const accelerometer = require("../components/accelerometer/routes");

const gyro = require("../components/gyro/routes");

const thermometer = require("../components/thermometer/routes");

router.use("/cows", cows);
router.use("/users", users);

router.use("/accelerometer", accelerometer);

router.use("/gyro", gyro);
router.use("/thermometer", thermometer);
router.use("/devices", devices);

module.exports = router;
