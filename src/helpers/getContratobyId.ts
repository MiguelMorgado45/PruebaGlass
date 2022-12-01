import { contrataciones } from '../data/dataContrataciones';


export const getContratobyId = (id:string | undefined ) => {
    
    return contrataciones.find(contrataciones => contrataciones.id === id);
}



