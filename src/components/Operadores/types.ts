export type OperadoresFormType = {
    nombre: string,
    alta?: string,
    correo?: string,
    telefono?: string,
    area? : string,
    descripcion?: string,
    selected? : SelectedRolType
}

export type RolesType = {
    selected: SelectedRolType[]
}

export type SelectedRolType = {
    id: string,
    rol: string,
    descr: string
}

export type GeneralRolesType = {
    nombre: string,
    descr: string | undefined
}
