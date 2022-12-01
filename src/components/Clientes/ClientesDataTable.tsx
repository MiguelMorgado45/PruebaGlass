import {useState} from 'react' 

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { getTemplates } from '../shared/dataTables/templates/getTemplates';
import { tableClientes } from '../../data/dataClientes';

export const ClientesDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);
    
    const {imageLogoTemplate, operadoresTemplate, personasTemplate, detalleTemplate, agregarContratacionTemplate} = getTemplates();

    return (
        <div className='tw-w-full'>
            <div className="tw-w-full">
                <DataTable value={tableClientes}  responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column body={imageLogoTemplate} header="Logo" ></Column>
                    <Column field="name" header="Cliente" sortable></Column>
                    <Column field="alta" header="Alta" sortable></Column>
                    <Column body={imageLogoTemplate} header="Productos" ></Column>
                    <Column body={personasTemplate} header="Personas"  sortable></Column>
                    <Column body={operadoresTemplate} header="Operadores"  sortable></Column>
                    <Column body={agregarContratacionTemplate} header="Contratación"></Column>
                    <Column field="cuenta" header="Cuenta" sortable></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                </DataTable>
            </div>
        </div>
    );
}
