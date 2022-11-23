import { ClienteFormType } from "../types";

type errorType = {
    cuenta?: string,
    descripcion?: string,
    razonSocial?: string,
    nombreComercial?: string,
    rfc?: string,
    regimenFiscal?: string,
    giro?: string,
    calle?: string,
    exterior?: string,
    interior?: string,
    colonia?: string,
    alcaldia?: string,
    estado?: string,
    pais?: string,
    codigoPostal?: string,
    nombreContacto?: string,
    telefono?: string | undefined,
    correo?: string,
    puesto?: string,
    cumpleaños?: string,
}

export const validacionClienteForm = (values:ClienteFormType ) => {
    let errors : errorType = {};
    if (!values.cuenta){
        errors.cuenta = "Por favor, ingrese la cuenta asociada"
    }
    if (!values.descripcion){
        errors.descripcion = "Por favor, ingrese la descripción"
    }
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
    if(!values.nombreContacto){
        errors.nombreContacto = "Por favor, ingrese el nombre del contacto";
    }
    if(!values.telefono){
        errors.telefono = "Por favor, ingrese el teléfono del contacto";
    }
    if(!values.correo){
        errors.correo = "Por favor, ingrese el correo del contacto";
    }
    if(!values.puesto){
        errors.puesto = "Por favor, ingrese el puesto del contacto";
    }

    return errors;
}