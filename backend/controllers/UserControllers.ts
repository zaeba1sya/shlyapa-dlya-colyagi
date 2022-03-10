import UserServices from "../services/UserService";
import { Request, Response } from "express";

class UserControllers {
  userServices: UserServices;
  constructor(UserServices: UserServices) {
    this.userServices = UserServices;
  }

  public registration = async (req: Request, res: Response) => {
    try {
      let { name, login, pass } = req.body;
      let data = await this.userServices.registration({ name, login, pass });
      res.status(200).json({ data });
    } catch (e) {
      res.status(500).json({ error: "Internal error" });
    }
  };

  public authorization = async (req: Request, res: Response) => {
    try {
      let { login, pass } = req.body;
      let data = await this.userServices.authorization({ login, pass });
      res.status(200).json({ data });
    } catch (e) {
      res.status(500).json({ error: "Internal error" });
    }
  };
}

export default UserControllers;
