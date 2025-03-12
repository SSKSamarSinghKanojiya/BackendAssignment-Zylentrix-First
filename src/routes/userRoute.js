const express = require("express");
const { createUser, getAllUser, getUserById, updateUserById, deleteUserById, deleteUser, removedata } = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", removedata);

module.exports = router;
