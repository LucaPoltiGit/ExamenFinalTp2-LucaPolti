import { Router } from "express";
import SondaRoutes from "./sondaRoutes.js";

const router = Router();


router.use("/user", SondaRoutes);

router.get('/', (req, res) => {
    res.send("Bienvenido")
  });

export default router;
