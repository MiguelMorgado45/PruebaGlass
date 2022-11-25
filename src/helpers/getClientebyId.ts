
import { clientes, clientesDomicilio, clientesGeneral } from '../data/clientedata';

export const getClientebyId = (id:string | undefined ) => {
    
    return clientes.find(cliente => cliente.id === id);
}

export const getClienteGeneralDetallebyId = (id:string | undefined ) => {
    
    return clientesGeneral.find(cliente => cliente.id === id);
}

export const getClienteDomicilioDetallebyId = (id:string | undefined ) => {
    
    return clientesDomicilio.find(cliente => cliente.id === id);
}

