export type ClienteFormType = {
    id?: string,
    general: GeneralClienteFormType,
    fiscal: FiscalClienteFormType,
    domicilio: DomicilioClienteFormType,
    contacto: ContactoFormType,
}

export type GeneralClienteFormType = {
    cuenta: string,
    descripcion: string,
}

export type FiscalClienteFormType = {
    razonSocial: string,
    nombreComercial: string,
    rfc: string,
    regimenFiscal: string,
    giro: string,
}

export type DomicilioClienteFormType = {
    calle: string,
    exterior: string,
    interior: string,
    colonia: string,
    alcaldia: string,
    estado: string,
    pais: string,
    codigoPostal: string,
}

export type ContactoFormType = {
    nombreContacto: string,
    telefono: string | undefined,
    correo: string,
    puesto: string,
    cumpleanos: string,
}