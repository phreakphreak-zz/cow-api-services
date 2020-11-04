const { Router } = require("express");
const router = Router();
const {
  getUsers,
  createUser,
  profileUser,
} = require("./users.controller");

router.get("/");

router.post("/", createUser);

router.post("/me", profileUser);

router.get("/:id");

router.put("/:id");

router.delete("/:id");

router.patch("/:id")

module.exports = router;
