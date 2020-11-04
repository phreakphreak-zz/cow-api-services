const {Router} = require("express")
const router = Router();
const cows = require("../components/cows/cows.routes");
const users = require("../components/users/users.routes");
const devices = require("../components/devices/devices.routes");

router.use("/cows",cows);
router.use("/users",users);
router.use("/devices",devices);

module.exports = router;