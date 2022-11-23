import { ContactoType, CuentaFormType, GeneralType, VendedorType } from "../types";

export type ErrorGeneralType = {
    name?: string,
    alta?: string | undefined,
}

export type ErrorContactoType = {
    correo?: string,
    phone?: string
}

export type ErrorVendedorType = {
    vendedor?: string,
}

export const validacionGeneralDetalle = (values:GeneralType ) => {
    let errors : ErrorGeneralType = {};
    if (!values.name){
        errors.name = "Por favor, ingrese el nombre de su cuenta"
    }

    if(!values.alta){
        errors.alta = "Por favor, inserte una fecha de alta";
    }

    return errors;
}


export const validacionContactoDetalle = (values:ContactoType ) => {
    let errors : ErrorContactoType = {};
    if (!values.correo){
        errors.correo = "Por favor, ingrese un correo"
    }

    if(!values.phone){
        errors.phone = "Por favor, ingrese el número";
    }

    return errors;
}


export const validacionVendedorDetalle = (values:VendedorType ) => {
    let errors : ErrorVendedorType = {};
    if (!values.vendedor){
        errors.vendedor = "Por favor, ingrese el nombre del vendedor"
    }

    return errors;
}