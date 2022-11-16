import React from 'react'
import { contrataciones, nameLogo } from '../data/dataContrataciones'

export const getLogoProductos = (name: string) => {
    return nameLogo.find(element => element.name == name)?.img;
}

export const getNumberProductos = (name: string) =>{
    return contrataciones.filter(element => element.name == name).length;
}