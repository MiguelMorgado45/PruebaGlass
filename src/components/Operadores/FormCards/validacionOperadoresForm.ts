import { OperadoresFormType } from "../types";

type errorType = {
    nombre?: string,
    alta? : string  | undefined,
    correo?: string,
    telefono?: string,
    descripcion? : string,
    selected?: any
}

export const validacionOperadorCard = (values:OperadoresFormType ) => {
    let errors : errorType = {};
    if (!values.nombre){
        errors.nombre = "Por favor, ingrese el nombre del operador"
    }

    if(!values.alta){
        errors.alta = "Por favor, inserte una fecha de alta";
    }

    if (!values.correo){
        errors.correo = "Por favor, ingrese su correo"
    }

    if(!values.telefono){
        errors.telefono = "Por favor, ingrese su número telefónico";
    }

    return errors;
}