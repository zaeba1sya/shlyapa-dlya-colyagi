import UserControllers from "../controllers/UserControllers";
import express, { Router } from "express";

class UserRouter {
  private router: Router;
  constructor(UserControllers: UserControllers) {
    this.router = Router();
    this.router.post("/auth", UserControllers.authorization);
    this.router.post("/reg", UserControllers.registration);
  }
}

export default UserRouter;
