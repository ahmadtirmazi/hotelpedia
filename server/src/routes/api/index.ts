import express from "express";

import users from "routes/api/users";

const router = express.Router();

router.use("/users", users);

export default router;
