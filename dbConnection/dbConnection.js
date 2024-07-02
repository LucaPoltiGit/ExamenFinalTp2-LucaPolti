import { Sequelize } from "sequelize";
/*import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
} from "../config/config.js";
const dbConnection = new Sequelize(DB_NAME, DB_USER,DB_PASSWORD, {
  host:  DB_HOST,
  dialect: 'DB_DIALECT',
  port:  DB_PORT,
});*/

const dbConnection = new Sequelize("SondaDB", "root", "", {
  host:  "localhost",
  dialect: 'mysql',
  port:  3306,
});
try {
  await dbConnection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export default dbConnection;