const { Router } = require("express");
const router = Router();
const {
  createDevice,
  getDevices,
} = require("./devices.controller");

router.get("/", getDevices);

router.post("/", createDevice);

router.get("/:id");

router.post("/:id");

router.put("/:id");

router.delete("/:id");

router.post("/accelerometer");


router.post("/thermometer");

module.exports = router;
