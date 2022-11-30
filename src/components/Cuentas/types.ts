export type CuentaFormType = {
    id?: string | undefined,
    cuenta: string,
    alta?: string,
    descripcion: string,
    correo?: string,
    phone?: string,
    vendedor?: string,
    comentario?: string
}

export type ContactoCuentaFormType = {
    correo: string,
    phone : string
}

export type VendedorCuentaFormType = {
    vendedor: string,
    comentario : string
}
export type propDetalleType = {
    id?: string | undefined
}