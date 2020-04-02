import express from "express";

import * as bodyParser from "body-parser";

import routes from "routes";

const app = express();

app.disable("x-powered-by");

// Parsing JSON request body
app.use(bodyParser.json({ limit: "50mb" }));

// Registering routes
app.use(routes);

export default app;
