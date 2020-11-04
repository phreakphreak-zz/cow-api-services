const { Router } = require("express");
const router = Router();
const {getCows,createCow,deleteCow} = require("./cows.controller");

router.get("/",getCows);

router.post("/",createCow);

router.get("/:id");

router.put("/:id");

router.delete("/:id",deleteCow);

router.patch("/:id");

module.exports = router;
