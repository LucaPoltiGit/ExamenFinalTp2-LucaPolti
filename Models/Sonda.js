import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";


class Sonda extends Model {}

User.init(
  {
    temperatura:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validation:{
        min: -20,
        max: 100,
      }
    },
    fechaHora: {
      type: DataTypes.DATE,
      allowNull: false, 
      defaultValue: DataTypes.NOW,
    },
    
  },  
  {
    sequelize: dbConnection,
    modelName: "Sonda",
  }
);

export default Sonda;