import { ContactoType } from "../types";

export const validationGeneralCard = (values: ContactoType) => {
    let errors : any = {};
    if (!values.correo){
        errors.cuenta = "Por favor, ingrese su correo"
    }

    if(!values.phone){
        errors.phone = "Por favor, ingrese su número telefónico";
    }

    return errors;
}