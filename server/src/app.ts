import express from "express";
const logger = require("morgan");
import * as bodyParser from "body-parser";

import routes from "routes";

const app = express();

app.disable("x-powered-by");

app.use(logger("dev"));

// Parsing JSON request body
app.use(bodyParser.json({ limit: "50mb" }));

// Registering routes
app.use(routes);

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error);
});

export default app;
