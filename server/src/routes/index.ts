import { Router } from "express";

import api from "routes/api";
import config from "config";

import { notFoundController } from "controllers/notfound";

const router = Router();

// API routes
router.use(config.baseApiUrl, api);

// Not found routes
router.use("*", notFoundController);

export default router;
