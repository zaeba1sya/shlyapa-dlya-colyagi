import sequelize from "./db";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  login: { type: DataTypes.STRING, unique: true },
  pass: { type: DataTypes.STRING },
});

const Orders = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  goods: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
});

User.hasMany(Orders);
Orders.belongsTo(User);

export { User, Orders };
