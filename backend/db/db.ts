import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    dialect: "postgres",
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
  }
);

export default sequelize;
