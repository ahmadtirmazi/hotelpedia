import express from "express";
const hotelsController = require("controllers/hotels");

const router = express.Router();

router.get("/", hotelsController.list);

export default router;
