// Server
import express from "express";
import App from "./app";
import sequelize from "./db/db";
import dotenv from "dotenv";
dotenv.config();

// User Router
import UserControllers from "./controllers/UserControllers";
import UserServices from "./services/UserService";
import UserRepo from "./services/UserService/repo";
import UserRouter from "./routes/UserRouter";

// Order Router
import OrderController from "./controllers/OrderControllers";
import OrderServices from "./services/OrderService";
import OrderRepo from "./services/OrderService/repo";
import OrderRouter from "./routes/OrderRouter";

// Models
import { User, Orders } from "./db/models";

const userRouter = new UserRouter(
  new UserControllers(new UserServices(new UserRepo(User)))
);

const orderRouter = new OrderRouter(
  new OrderController(new OrderServices(new OrderRepo(Orders)))
);

const app = new App({
  port: Number(process.env.PORT),
  routers: [userRouter, orderRouter],
  middleWares: [express.json()],
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen();
  } catch (e) {
    console.log(e);
  }
};

start();
