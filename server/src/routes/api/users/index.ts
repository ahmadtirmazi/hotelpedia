import express from "express";
const usersController = require("controllers/users");

const router = express.Router();

router.get("/", usersController.list);
router.get("/search", usersController.search);

export default router;
