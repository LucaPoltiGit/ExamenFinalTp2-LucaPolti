import SondaService from '../Service/SondaService.js'

const sondaS = new SondaService();
class SondaController {
  

  createSonda = async (req, res) =>{
    const {id, temperatura} = req.body;
    try {
      const sonda = await sondaS.createSondaService(id, temperatura);
      
      res.status(200).json({status: "success", payload: sonda});
    } catch (error) {
      res.status(400).json({ status: "Error", msg: "datos no válidos" });
    }
  }

  getAllSondas = async (req, res) => {
    try {
      const sondas = await sondaS.getAllSondasService();
      if(sondas.length == 0) throw error
      res.status(200).json({status: "success", payload: sondas});
    }catch (error) {
      res.status(400).json({ status: "Error", msg: "no hay sondas" });
      console.log(error.message);
    }
  };

  getSondaById = async (req, res) => {
    
    try{
      const { id } = req.params;
      const sonda = await sondaS.getSondaByIdService(id);
      if(!sonda) throw error
      res.status(200).json({status: "success", payload: sonda});
    } catch(error) {
        res.status(400).json({ status: "Error", message: 'Número de sonda incorrecto' });
    }
};
}

export default SondaController;
