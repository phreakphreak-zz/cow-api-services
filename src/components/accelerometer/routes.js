const { Router } = require("express");
const router = Router();
const { getData, setData,getDataById } = require("./controller");



router.get("/", getData);

router.post("/", setData);


routerr.get("/:id",getDataById);

module.exports = router;
