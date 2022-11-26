import { contratacionContacto, contratacionGeneral, contrataciones } from '../data/dataContrataciones';


export const getContratobyId = (id:string | undefined ) => {
    
    return contrataciones.find(contrataciones => contrataciones.id === id);
}

export const getContratoGeneralbyId = (id:string | undefined ) => {
    
    return contratacionGeneral.find(operador => operador.id === id);
}


export const getContratoContactobyId = (id:string | undefined ) => {
    
    return contratacionContacto.find(operador => operador.id === id);
}



