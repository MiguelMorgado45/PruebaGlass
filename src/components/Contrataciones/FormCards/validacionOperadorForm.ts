import { OperadorFormType } from "../types";

type errorType = {
    cliente?: string,
    descr?: string,
    producto?: string | undefined,
    contratados?: string,
    alta?: string,
    vencimiento?: string,
    costo?: string,
    estado?: string | undefined,
    nombreContacto?:string,
    puesto?: string, 
    telefono?: string,
    correo?: string,
    cumple?: string,
}

export const validacionOperadorCard = (values:OperadorFormType ) => {
    let errors : errorType = {};
    if (!values.cliente){
        errors.cliente = "Por favor, seleccione un cliente"
    }
    if (!values.descr){
        errors.alta = "Por favor, ingrese la descripción"
    }
    if (!values.producto){
        errors.producto = "Por favor, seleccione un producto"
    }

    if (!values.alta){
        errors.alta = "Por favor, ingrese la fecha"
    }

    if(!values.vencimiento){
        errors.vencimiento = "Por favor, ingrese la fecha de vencimiento";
    }

    if(!values.estado){
        errors.estado = "Por favor, ingrese el estado";
    }
    if(!values.nombreContacto){
        errors.nombreContacto = "Por favor, ingrese el nombre del contacto";
    }
    if(!values.telefono){
        errors.telefono = "Por favor, ingrese el teléfono del contacto";
    }
    if(!values.cumple){
        errors.cumple = "Por favor, ingrese la fecha de nacimiento del contacto";
    }
    if(!values.correo){
        errors.correo = "Por favor, ingrese el correo del contacto";
    }
    if(!values.puesto){
        errors.puesto = "Por favor, ingrese el puesto del contacto";
    }

    return errors;
}