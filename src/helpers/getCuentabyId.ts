import React from 'react'
import { cuentas, contactoDetalleCuenta, vendedorDetalleCuenta, minidashDetalleCuenta } from '../data/data';

export const getCuentabyId = (id:string | undefined ) => {
    
    return cuentas.find(cuenta => cuenta.id === id);
}

export const getContactobyId = (id:string | undefined ) => {
    
    return contactoDetalleCuenta.find(cliente => cliente.id === id);
}

export const getVendedorbyId = (id:string | undefined ) => {
    
    return vendedorDetalleCuenta.find(cliente => cliente.id === id);
}

export const getMinidashbyId = (id:string | undefined ) => {
    
    return minidashDetalleCuenta.find(cliente => cliente.id === id);
}

