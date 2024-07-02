import Sonda from '../Models/Sonda.js';
import { tempValida, idValida } from '../utils/utils.js';

class SondaService {
  createSondaService = async (id,temp) =>{
    try{
      const validateTemp = tempValida(temp);
   
      const validateId = idValida(id);
   
      if(!validateTemp || !validateId) throw error;
   
      const date = new Date();
    
      const newSonda = await Sonda.create({id: id, temperatura: temp, fechaHora: date });
    
      return newSonda;
    }catch(error){
      throw error;
    }
  };

  getAllSondasService = async () => {
    
    const sondas = await Sonda.findAll();
    return sondas;
  };

  getSondaByIdService = async (id) => {
    const sonda = await Sonda.findOne({ where: { id } });
    return sonda;
  };
}

export default SondaService;