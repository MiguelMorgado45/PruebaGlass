import { CuentaFormType } from "../types";

type errorType = {
    cuenta? : string,
    fechaAlta?: string | undefined,
    descripcion?: string,
    correo? : string,
    phone?: string,
}

export const validacionCuentaCard = (values:CuentaFormType ) => {
    let errors : errorType = {};
    if (!values.cuenta){
        errors.cuenta = "Por favor, ingrese el nombre de su cuenta"
    }

    if(!values.alta){
        errors.fechaAlta = "Por favor, inserte una fecha de alta";
    }

    if (!values.correo){
        errors.correo = "Por favor, ingrese su correo"
    }

    if(!values.phone){
        errors.phone = "Por favor, ingrese su número telefónico";
    }

    return errors;
}

export const validacionCuentaCardAgregar = (values:CuentaFormType ) => {
    let errors : errorType = {};
    if (!values.cuenta){
        errors.cuenta = "Por favor, ingrese el nombre de su cuenta"
    }

    return errors;
}