import { DataTypes } from "sequelize";
import { DB } from "../configs/db";

export const Users = DB.getSequelize().define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "users",
  timestamps: true,
});
