import React from 'react'
import { minidashDetalleCuenta } from '../data/data';
import { cuentas } from '../data/dataCuentas';

export const getCuentabyId = (id:string | undefined ) => {
    
    return cuentas.find(cuenta => cuenta.id === id);
}
export const getMinidashbyId = (id:string | undefined ) => {
    
    return minidashDetalleCuenta.find(cuenta => cuenta.id === id);
}

