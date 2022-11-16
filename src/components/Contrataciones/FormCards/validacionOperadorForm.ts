import { OperadorFormType } from "../types";

type errorType = {
    producto?: string | undefined,
    contratados?: string,
    alta?: string,
    vencimiento?: string,
    costo?: string,
    estado?: string | undefined,

}

export const validacionOperadorCard = (values:OperadorFormType ) => {
    let errors : errorType = {};
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

    return errors;
}