import { getLogoProductos, getNumberProductos } from "../helpers/getLogoProductos"

export const contrataciones = [
    {
        id:"1",
        cliente: 'INNOVAREG',
        name: 'CLOUD',
        personas: 20,
        alta: '28/10/2022',
        expira: '28/04/2023',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:"2",
        cliente: 'Katoen Natie Servicios Logís...',
        name: 'PAYROLL',
        personas: 16,
        alta: '18/05/2018',
        expira: '18/05/2022',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:"3",
        cliente: 'Katoen Natie Altamira, S.A. d...',
        name: 'EX PYME',
        personas: 56,
        alta: '18/05/2018',
        expira: '18/05/2022',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:"4",
        cliente: 'Katoen Natie Mexicana, S.A...',
        name: 'CLOUD',
        personas: 45,
        alta: '18/05/2019',
        expira: '18/05/2022',
        baja: true, 
        estado: 'Inactivo'
    },
    {
        id:"5",
        cliente: 'Servicios Generales de Logí...',
        name: 'PLUS',
        personas: 15,
        alta: '30/04/2020',
        expira: '30/04/2022',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:"6",
        cliente: 'Servicios Generales de Logí...',
        name: 'BREAK',
        personas: 15,
        alta: '30/04/2020',
        expira: '30/04/2022',
        baja: false, 
        estado: 'Activo'
    },

]



export const typeProductos = [
    {
        name: 'EX PYME', 
        descr: 'RH todo en 1',
    },
    {
        name: 'PLUS', 
        descr: 'Asistencia',
    },
    {
        name: 'CLOUD', 
        descr: 'Asistencia Estándar',
    },
    {
        name: 'PAYROLL', 
        descr: 'Nómina',
    },
    {
        name: 'BREAK', 
        descr: 'Vacaciones',
    },
    {
        name: 'VISITOR', 
        descr: 'Control de Visitas',
    },
    {
        name: 'DINNER', 
        descr: 'Control de comedor',
    }

]

export const contratacionGeneral = [
    {
        id : "1",
        producto: 'Producto 1',
        contratados: 30,
        alta: '01/09/2022',
        expira: '30/09/2022',
        costo: 10,
        estado: 'Estado 1',
    },
    {
        id : "2",
        producto: 'Producto 2',
        contratados: 40,
        alta: '01/10/2022',
        expira: '31/10/2022',
        costo: 20,
        estado: 'Estado 2',
    },
    {
        id : "3",
        producto: 'Producto 3',
        contratados: 50,
        alta: '01/11/2022',
        expira: '30/10/2022',
        costo: 30,
        estado: 'Estado 3',
    },
]

export const contratacionContacto = [
    {
        id : "1",
        name: 'Fredo Sanchez',
        telefono: '19-1919-1919',
        correo: 'correo1@empresa.com',
        puesto: 'RH',
        cumple: '01/09/2000',
    },
    {
        id : "2",
        name: 'Martha Jared',
        telefono: '29-2929-2929',
        correo: 'correo2@empresa.com',
        puesto: 'DEV',
        cumple: '01/08/2000',
    },
    {
        id : "3",
        name: 'Ignacio Taibo',
        telefono: '39-3939-3939',
        correo: 'correo3@empresa.com',
        puesto: 'FIN',
        cumple: '01/07/2000',
    },
]