import { GeneralType } from "../../types";

type errorType = {
    cuenta? : string,
    fechaALta?: string | undefined,
    descripcion?: string
}

export const validationGeneralCard = (values: GeneralType) => {
    let errors : errorType = {};
    if (!values.cuenta){
        errors.cuenta = "Por favor, ingrese el nombre de su cuenta"
    }

    if(!values.fechaAlta){
        errors.descripcion = "Por favor, inserte una fecha de alta";
    }

    return errors;
}