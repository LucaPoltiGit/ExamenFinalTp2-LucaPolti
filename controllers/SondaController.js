import SondaService from '../Service/SondaService.js'

class SondaController {
  createSonda = async (req, res) =>{
    const {id, temperatura} = req.body;
    try {
      const sonda = await SondaService.createSonda(id, temperatura);
      res.status(200).json({status: "success", payload: sonda});
    } catch (error) {
      res.status(500).json({ status: "Error", msg: "datos no válidos" });
      console.log(error.message);
    }
  }
}

export default SondaController;
