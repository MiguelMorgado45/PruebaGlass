import { getOperadorState } from "../helpers/getOperadorbyId";


export const operadores = [
    {
        id: '1',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Nancy Cruz Corona',
        usuario: 'nancy.cruz@timeweb',
        telefono: '55 1992 0550',
        roles: 'ADMINISTRADOR DE CUENTAS',
        alta: '18/05/2018',
        estado: 'Activo'
    },
    {
        id: '2',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Anabel Orozco Gómez',
        usuario: 'anabel.orozco@timeweb',
        telefono: '55 4610 4412',
        roles: 'ADMINISTRADOR DE OPERADORES',
        alta: '18/05/2018',
        estado: 'Activo'
    },
    {
        id: '3',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Omar Oyorzabal Ramírez',
        usuario: 'omar.oyorzabal@timeweb',
        telefono: '55 9015 0010',
        roles: 'ADMINISTRADOR DE CONTRASEÑAS',
        alta: '18/05/2018',
        estado: 'Activo'
    },
    {
        id: '4',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Eduardo Ramírez Carmona',
        usuario: 'eduardo.ramirez@timeweb',
        telefono: '55 1992 0550',
        roles: 'ADMINISTRADOR DE REPORTES',
        alta: '18/05/2018',
        estado: 'Activo'
    },
    {
        id: '5',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Anelia Ramírez Hernández',
        usuario: 'anelia@timeweb',
        telefono: '55 2588 4536',
        roles: 'ADMINISTRADOR DE CUENTAS',
        alta: '18/05/2018',
        estado: 'Inactivo'
    },
    {
        id: '6',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Fernando Cárdenas Vázquez',
        usuario: 'fernando.cardenas@timeweb',
        telefono: '55 1992 0550',
        roles: 'ADMINISTRADOR DE TODO',
        alta: '18/05/2018',
        estado: 'Inactivo'
    },
]

export const typeOperadores = [
    { type: 'TODOS', number: operadores.length },
    { type: 'INACTIVO', number: getOperadorState('Inactivo') },
    { type: 'ACTIVO', number: getOperadorState('Activo') },
    { type: 'DISPONIBLES', number: operadores.length }
];

export const rolesOperadores = [
    {
        id: '1',
        rol: 'ADMINISTRADOR DE CUENTAS',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican crear una nueva cuenta.'
    },
    {
        id: '2',
        rol: 'ADMINISTRADOR DE REPORTES',
        descr: 'Puede crear, modificar y administrar los reportes del sistema.'
    },
    {
        id: '3',
        rol: 'ADMINISTRADOR DE CONTRATACIONES',
        descr: 'Puede crear, modificar y administrar las contrataciones que se hagan sobre un cliente.'
    },
    {
        id: '4',
        rol: 'ADMINISTRADOR DE DAHSBOARD',
        descr: 'Puede crear, modificar y administrar las cards que se mostrarán en el dashboard principal.'
    },
    {
        id: '5',
        rol: 'ADMINISTRADOR DE ANUNCIOS',
        descr: 'Puede crear, modificar y administrar los anuncios dirigidos a Hub.'
    },
    {
        id: '6',
        rol: 'ADMINISTRADOR DE ROLES',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican asignar roles a un operador'
    },
    {
        id: '7',
        rol: 'ADMINISTRADOR DE OPERADORES',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo operador.'
    },
    {
        id: '8',
        rol: 'ADMINISTRADOR DE CLIENTES',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo cliente.'
    },
]