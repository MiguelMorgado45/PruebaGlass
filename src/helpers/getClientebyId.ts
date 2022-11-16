
import { clientes } from '../data/clientedata';

export const getClientebyId = (id:string | undefined ) => {
    
    return clientes.find(cliente => cliente.id === id);
}
