import express from "express";
const usersController = require("controllers/users");

const router = express.Router();

router.get("/", usersController.list);

export default router;
