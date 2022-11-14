import { ContactoType } from "../../types";

type errorType = {
    cuenta? : string,
    phone?: string,
}

export const validationContactoCard = (values: ContactoType) => {
    let errors : errorType = {};
    if (!values.correo){
        errors.cuenta = "Por favor, ingrese su correo"
    }

    if(!values.phone){
        errors.phone = "Por favor, ingrese su número telefónico";
    }

    return errors;
}