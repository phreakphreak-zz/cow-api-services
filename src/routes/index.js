const { Router } = require("express");
const router = Router();
const cows = require("../components/cows/routes");
const users = require("../components/users/routes");
const devices = require("../components/devices/routes");
const accelerometer = require("../components/accelerometer/routes")

router.post("/test", (req, res, next) => {
  // const {model} = req.body;
  // console.log(model);
  res.json({ msg: "received" });
});
router.use("/cows", cows);
router.use("/users", users);
router.use("/devices", devices);
router.use("/devices/accelerometer",accelerometer)

module.exports = router;
