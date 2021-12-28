import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

controller("/auth");
export class LoginController {
  @get("/login")
  // @use(Logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else res.send("No email");
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
