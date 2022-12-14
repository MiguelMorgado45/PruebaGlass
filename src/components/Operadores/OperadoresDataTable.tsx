import {useState} from 'react' 
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { operadores } from '../../data/dataOperadores';
import { getTemplates } from '../shared/dataTables/templates/getTemplates';

export const OperadoresDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);
    
    const {imageLogoTemplate, detalleTemplate, estadoTemplate, operadorTemplate, rolesTemplate} = getTemplates();

    return (
        <div className='tw-w-full'>
            <div className="tw-w-full">
                <DataTable value={operadores} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column body={imageLogoTemplate} header="Logo" ></Column>
                    <Column field="name" header="Nombre" className='tw-text-xs' sortable></Column>
                    <Column field="usuario" header="Usuario" className='tw-text-xs' sortable></Column>
                    <Column field="telefono" header="Teléfono" className='tw-text-xs' sortable></Column>
                    <Column body={rolesTemplate} field="roles" header="Roles" className='tw-text-xs' sortable></Column>
                    <Column field="alta" header="Alta" className='tw-text-xs' sortable></Column>
                    <Column body={operadorTemplate} header="Roles" ></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                    <Column body={estadoTemplate} field="estado" header="Estado" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
}
