const { Router } = require("express");
const router = Router();
const { getData, setData } = require("./controller");

router.get("/", getData);

router.post("/", setData);

module.exports = router;
