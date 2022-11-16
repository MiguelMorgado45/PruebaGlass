import React from 'react'
import { contrataciones } from '../data/dataContrataciones'
import { nameLogo } from '../data/dataProductos';

export const getLogoProductos = (name: string) => {
    return nameLogo.find(element => element.name == name)?.img;
}

export const getNumberProductos = (name: string) =>{
    return contrataciones.filter(element => element.name == name).length;
}