export type OperadorFormType = {
    cliente: string,
    descr: string,
    producto: string | undefined,
    contratados : number,
    alta: string,
    vencimiento: string,
    costo : number,
    estado : string | undefined,
    nombreContacto:string, 
    telefono: string,
    puesto: string,
    correo: string,
    cumple: string,
    mismo?: boolean
}

export type ContratacionGeneralDetalleType = {
    producto: string,
    contratados: number,
    alta: string,
    expira: string,
    costo: number, 
    estado: string,
}

export type ContratacionContactoDetalleType = {
    name: string,
    telefono: string,
    correo: string,
    puesto: string,
    cumple: string
}

