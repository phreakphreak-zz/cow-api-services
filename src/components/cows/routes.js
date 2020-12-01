const { Router } = require("express");
const router = Router();
const { getCows, createCow, deleteCow,getCowById } = require("./controller");



router.get("/", getCows);

router.post("/", createCow);


router.get("/:id",getCowById);

//router.put("/:id");

router.delete("/:id", deleteCow);

//router.patch("/:id");


//health
//router.get("/health")


//health
module.exports = router;

