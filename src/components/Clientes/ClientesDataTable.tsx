import {useState} from 'react' 

import { Checkbox } from 'primereact/checkbox';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { clientes } from '../../data/clientedata';
import { getTemplates } from '../shared/dataTables/templates/getTemplates';

export const ClientesDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);
    
    const {imageLogoTemplate, operadoresTemplate, personasTemplate, detalleTemplate, estadoTemplate} = getTemplates();

    return (
        <div className='tw-w-full'>
            <div className="tw-w-full">
                <DataTable value={clientes}  responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column body={imageLogoTemplate} header="Logo" ></Column>
                    <Column field="name" header="Cliente" sortable></Column>
                    <Column field="alta" header="Alta" sortable></Column>
                    <Column body={imageLogoTemplate} header="Contrataciones" ></Column>
                    <Column body={personasTemplate} header="Personas"  sortable></Column>
                    <Column body={operadoresTemplate} header="Operadores"  sortable></Column>
                    <Column field="cuenta" header="Cuenta" sortable></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                </DataTable>
            </div>
        </div>
    );
}
