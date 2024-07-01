import { Router } from "express";
import SondaController from "../controllers/SondaController.js";

const sondaController = new SondaController();

const SondaRoutes = Router();

SondaRoutes.post("/", sondaController.createSonda);


export default SondaRoutes;
