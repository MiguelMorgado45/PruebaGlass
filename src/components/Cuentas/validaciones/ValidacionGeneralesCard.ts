import { GeneralType } from "../types";

export const validationGeneralCard = (values: GeneralType) => {
    let errors : any = {};
    if (!values.cuenta){
        errors.cuenta = "Por favor, ingrese el nombre de su cuenta"
    }

    if(!values.fechaAlta){
        errors.descripcion = "Por favor, inserte una fecha de alta";
    }

    return errors;
}