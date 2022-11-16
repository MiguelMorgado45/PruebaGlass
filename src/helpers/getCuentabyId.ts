import React from 'react'
import { cuentas } from '../data/data'

export const getCuentabyId = (id:string | undefined ) => {
    
    return cuentas.find(cuenta => cuenta.id === id);
}
