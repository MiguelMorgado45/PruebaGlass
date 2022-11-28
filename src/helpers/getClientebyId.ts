
import { clientes } from '../data/dataClientes';

export const getClientebyId = (id:string | undefined ) => {
    
    return clientes.find(cliente => cliente.id === id);
}

