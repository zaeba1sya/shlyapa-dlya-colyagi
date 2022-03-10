import type UserRepo from "./repo";
import { IUser } from "./interfaces";

class UserServices {
  private userRepo: UserRepo;

  constructor(UserRepo: UserRepo) {
    this.userRepo = UserRepo;
  }

  public registration = async (config: IUser) => {
    return await this.userRepo.registration(config);
  };

  public authorization = async (config: IUser) => {
    return await this.userRepo.authorization(config);
  };
}

export default UserServices;
