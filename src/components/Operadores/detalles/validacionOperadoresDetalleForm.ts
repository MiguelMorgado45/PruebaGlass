import { OperadoresDetalleType } from "../types";

type errorType = {
    nombre?: string;
    correo?: string;
    telefono?: string;
    area?: string;
    alta?: string;
}

export const validacionOperadorDetallesCard = (values:OperadoresDetalleType ) => {
    let errors : errorType = {};
    if (!values.nombre){
        errors.nombre = "Por favor, ingrese el nombre del operador"
    }

    if(!values.alta){
        errors.alta = "Por favor, inserte la fecha de alta";
    }

    if (!values.correo){
        errors.correo = "Por favor, ingrese el correo"
    }

    if(!values.telefono){
        errors.telefono = "Por favor, ingrese el número telefónico";
    }

    if(!values.area){
        errors.area = "Por favor, inserte el área del operador";
    }

    return errors;
}