import express from "express";

import hotels from "routes/api/hotels";

const router = express.Router();

router.use("/hotels", hotels);

export default router;
