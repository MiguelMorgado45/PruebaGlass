export type ClienteFormType = {
    cuenta: string,
    descripcion: string,
    razonSocial: string,
    nombreComercial: string,
    rfc: string,
    regimenFiscal: string,
    giro: string,
    calle: string,
    exterior: string,
    interior: string,
    colonia: string,
    alcaldia: string,
    estado: string,
    pais: string,
    codigoPostal: string,
    nombreContacto: string,
    telefono: string | undefined,
    correo: string,
    puesto: string,
    cumpleaños: string,
}

export type GeneralDetalleFormType = {
    razonSocial: string,
    nombreComercial: string,
    rfc: string,
    regimenFiscal: string,
    giro: string,
    registroPatronal: string,
}

export type DomicilioDetalleFormType = {
    calle: string,
    exterior: string,
    interior: string,
    colonia: string,
    alcaldia: string,
    estado: string,
    pais: string,
    codigoPostal: string,
}