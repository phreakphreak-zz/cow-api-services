const { Router } = require("express");
const router = Router();
const {
  createDevice,
  getDevices,
  getDeviceById
} = require("./controller");

router.get("/", getDevices);

router.post("/", createDevice);

router.get("/:id",getDeviceById);

router.post("/:id");

router.put("/:id");

router.delete("/:id");

router.post("/accelerometer", (req,res,next)=>{
  const {id,data}= req.body;
  console.log(id,data);
  res.json("ok");

});


router.post("/thermometer", (req,res,next)=>{
  const {id,data}= req.body;
  console.log(id,data);
  res.json("ok");
});

module.exports = router;
