import express, { Request, Response } from "express";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";

import "./controllers/LoginController";
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["aaa"] }));
app.use(AppRouter.getInstance());

// const port = 3000;

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
