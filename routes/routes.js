import { Router } from "express";
import userRoutes from "./userRoutes.js";

const routes = Router();


routes.use("/user", logger, userRoutes);

export default routes;
