import { ContratacionContactoType, ContratacionGeneralType } from "../types";

type errorType = {
    producto?: string,
    contratados?: string,
    alta?: string,
    expira?: string,
    costo?: string, 
    estado?: string,

    nombreContacto?: string,
    telefono?: string,
    correo?: string,
    puesto?: string,
    cumple?: string
}

export const validacionGeneralDetalleCard = (values:ContratacionGeneralType ) => {
    let errors : errorType = {};
    if (!values.producto){
        errors.producto = "Por favor, seleccione un producto"
    }
    if (!values.contratados){
        errors.contratados = "Por favor, ingrese el número de contratados"
    }
    if (!values.alta){
        errors.alta = "Por favor, ingrese la fecha de alta"
    }

    if (!values.expira){
        errors.expira = "Por favor, ingrese la fecha de vencimiento"
    }

    // if(!values.costo){
    //     errors.costo = "Por favor, ingrese la fecha de vencimiento";
    // }

    if(!values.estado){
        errors.estado = "Por favor, ingrese el estado";
    }

    return errors;
}

export const validacionContactoDetalleCard = (values:ContratacionContactoType ) => {
    let errors : errorType = {};
    if (!values.nombreContacto){
        errors.nombreContacto = "Por favor, seleccione un producto"
    }
    if (!values.telefono){
        errors.telefono = "Por favor, ingrese el telefono"
    }
    if (!values.correo){
        errors.correo = "Por favor, ingrese el correo empresarial"
    }

    if (!values.puesto){
        errors.puesto = "Por favor, ingrese el puesto"
    }

    if(!values.cumple){
        errors.cumple = "Por favor, ingrese la fecha de cumpleaños";
    }

    return errors;
}