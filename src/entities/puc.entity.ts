import { DataTypes } from "sequelize";
import { DB } from "../configs/db";

export const PUC = DB.getSequelize().define("pucs", {
  vehicleNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "pucs",
  timestamps: true,
});
