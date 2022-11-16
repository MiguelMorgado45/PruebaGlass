import { getLogoProductos, getNumberProductos } from "../helpers/getLogoProductos"

export const contrataciones = [
    {
        id:1,
        cliente: 'INNOVAREG',
        name: 'CLOUD',
        personas: 20,
        alta: '28/10/2022',
        expira: '28/04/2023',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:2,
        cliente: 'Katoen Natie Servicios Logís...',
        name: 'PAYROLL',
        personas: 16,
        alta: '18/05/2018',
        expira: '18/05/2022',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:3,
        cliente: 'Katoen Natie Altamira, S.A. d...',
        name: 'EX PYME',
        personas: 56,
        alta: '18/05/2018',
        expira: '18/05/2022',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:4,
        cliente: 'Katoen Natie Mexicana, S.A...',
        name: 'CLOUD',
        personas: 45,
        alta: '18/05/2019',
        expira: '18/05/2022',
        baja: true, 
        estado: 'Inactivo'
    },
    {
        id:5,
        cliente: 'Servicios Generales de Logí...',
        name: 'PLUS',
        personas: 15,
        alta: '30/04/2020',
        expira: '30/04/2022',
        baja: false, 
        estado: 'Activo'
    },
    {
        id:5,
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
        number: getNumberProductos('EX PYME'),
        img: getLogoProductos('EX PYME'),
    },
    {
        name: 'PLUS', 
        descr: 'Asistencia',
        number: getNumberProductos('PLUS'),
        img: getLogoProductos('PLUS'),
    },
    {
        name: 'CLOUD', 
        descr: 'Asistencia Estándar',
        number: getNumberProductos('CLOUD'),
        img: getLogoProductos('CLOUD'),
    },
    {
        name: 'PAYROLL', 
        descr: 'Nómina',
        number: getNumberProductos('PAYROLL'),
        img: getLogoProductos('PAYROLL'),
    },
    {
        name: 'BREAK', 
        descr: 'Vacaciones',
        number: getNumberProductos('BREAK'),
        img: getLogoProductos('BREAK'),
    },
    {
        name: 'VISITOR', 
        descr: 'Control de Visitas',
        number: getNumberProductos('VISITOR'),
        img: getLogoProductos('VISITOR'),
    },
    {
        name: 'DINNER', 
        descr: 'Control de comedor',
        number: getNumberProductos('DINNER'),
        img: getLogoProductos('DINNER'),
    }

]
