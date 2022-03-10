import { IUser } from "../interfaces";

class UserRepo {
  model: any;
  constructor(Model: any) {
    this.model = Model;
  }

  public registration = async (config: IUser) => {
    return this.model.create({
      name: config.name,
      login: config.login,
      pass: config.pass,
    });
  };

  public authorization = async (config: IUser) => {
    return this.model.findOne({
      where: { login: config.login, pass: config.pass },
    });
  };
}

export default UserRepo;
