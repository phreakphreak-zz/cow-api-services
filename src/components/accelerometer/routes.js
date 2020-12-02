const { Router } = require("express");
const router = Router();
const {
  createModelIA,
  getDataIA,
  convertTensorIA,
  trainModelIA,
  generateModelIA,
  deleteModelIA,
  getDataApi,
  setDataApi,
  getDataApiById,
} = require("./controller");

router.get("/model", createModelIA, generateModelIA);

router.delete("/model", deleteModelIA);

router.get("/", getDataApi);

router.post("/", setDataApi);

router.get("/:id", getDataApiById);

module.exports = router;
