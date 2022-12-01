export type ContratacionFormType = {
    id?: string,
    cliente: string,
    descr: string,
    producto: string,
    contratados: number,
    alta: string,
    expira?: string,
    costo?: number, 
    estado: string,
    nombreContacto:string, 
    telefono: string,
    puesto: string,
    correo: string,
    cumple: string,
    mismo: boolean
}

export type ContratacionGeneralType = {
    producto: string,
    contratados: number,
    alta: string,
    expira?: string,
    costo?: number, 
    estado: string,
}

export type ContratacionContactoType = {
    nombreContacto:string, 
    telefono: string,
    puesto: string,
    correo: string,
    cumple: string,
    mismo?: boolean
}

