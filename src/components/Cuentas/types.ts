export type GeneralType = {
    name: string,
    alta : string | undefined,
    descripcion: string,
}

export type ContactoType = {
    correo: string,
    phone : string
}

export type VendedorType = {
    vendedor: string,
    comentario : string
}

export type propDetalleType = {
    id: string
}

export type CuentaFormType = {
    cuenta: string,
    fechaAlta : string  | undefined,
    descripcion: string,
    correo: string,
    phone : string,
}
