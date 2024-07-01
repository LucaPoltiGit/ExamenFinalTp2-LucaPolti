import express from "express";
import routes from "./routes/routes.js";
import {SERVER_PORT} from "./config/config.js"



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(routes);

app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "not found" });
});

/*await dbConnection.sync({force:true})*/




app.listen(SERVER_PORT, () => {
  console.log("Puerto 8080 ok");
});
