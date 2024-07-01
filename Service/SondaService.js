import Sonda from '../Models/Sonda.js';
import { tempValida, idValida } from '../utils/utils.js';

class SondaService {
  createSondaService = async ({id,temp}) =>{
    try{
      const validateTemp = tempValida(temp);
      const validateId = idValida(id);
      if(!validateTemp || !validateId) throw error;
      const newSonda = await Sonda.create.create({id, temp});
      return newSonda;
    }catch(error){
      throw error;
    }
  }


}

export default SondaService;