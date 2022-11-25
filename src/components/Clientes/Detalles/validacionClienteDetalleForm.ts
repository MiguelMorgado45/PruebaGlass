import { DomicilioDetalleFormType, GeneralDetalleFormType } from "../types";

type errorType = {
    razonSocial?: string,
    nombreComercial?: string,
    rfc?: string,
    regimenFiscal?: string,
    giro?: string,
    registroPatronal?: string,

    calle?: string,
    exterior?: string,
    interior?: string,
    colonia?: string,
    alcaldia?: string,
    estado?: string,
    pais?: string,
    codigoPostal?: string,
}

export const validacionGeneralDetalleForm = (values:GeneralDetalleFormType ) => {
    let errors : errorType = {};
    
    if (!values.razonSocial){
        errors.razonSocial = "Por favor, ingrese la razón social"
    }

    if(!values.nombreComercial){
        errors.nombreComercial = "Por favor, ingrese el nombre comercial";
    }

    if (!values.rfc){
        errors.rfc = "Por favor, ingrese su RFC"
    }

    if(!values.regimenFiscal){
        errors.regimenFiscal = "Por favor, ingrese su Régimen Fiscal";
    }

    if (!values.giro){
        errors.giro = "Por favor, ingrese el giro"
    }

    if(!values.registroPatronal){
        errors.registroPatronal = "Por favor, ingrese su Registro Patronal";
    }

    return errors;
}

export const validacionDomicilioDetalleForm = (values:DomicilioDetalleFormType ) => {
    let errors : errorType = {};
    
    if (!values.calle){
        errors.calle = "Por favor, ingrese la calle"
    }

    if(!values.exterior){
        errors.exterior = "Por favor, ingrese el número exterior";
    }

    if (!values.interior){
        errors.interior = "Por favor, ingrese el número interior"
    }

    if(!values.colonia){
        errors.colonia = "Por favor, ingrese su colonia";
    }
    
    if (!values.alcaldia){
        errors.alcaldia = "Por favor, ingrese la alcaldía o el municipio"
    }

    if(!values.estado){
        errors.estado = "Por favor, ingrese su estado";
    }

    if (!values.pais){
        errors.pais = "Por favor, ingrese el país"
    }

    if(!values.codigoPostal){
        errors.codigoPostal = "Por favor, ingrese su código postal";
    } 
       return errors;
}
