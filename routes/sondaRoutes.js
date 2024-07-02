import { Router } from "express";
import SondaController from "../controllers/SondaController.js";
import SondaService from "../Service/SondaService.js";

const sondaController = new SondaController();

const SondaRoutes = Router();

SondaRoutes.post("/", sondaController.createSonda);
SondaRoutes.get("/", sondaController.getAllSondas);
SondaRoutes.get("/:id", sondaController.getSondaById);


export default SondaRoutes;
