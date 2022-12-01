import {useState} from 'react' 

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
 
import { getTemplates } from '../shared/dataTables/templates/getTemplates';
import { contratacionestable } from '../../data/dataContrataciones';

export const ContratacionesDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);
    
    const {detalleTemplate, estadoTemplate, personasTemplate, productLogoTemplate, bajaTemplate} = getTemplates();


    return (
        <div className='tw-w-full'>
            <div className="tw-w-full">
                <DataTable value={contratacionestable} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id">
                    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                    <Column field="cliente" header="Cliente" sortable></Column>
                    <Column body={productLogoTemplate} header="Productos" ></Column>
                    <Column field="personas" header="Personas" body={personasTemplate} sortable></Column>
                    <Column field="alta" header="Alta" sortable></Column>
                    <Column field="expira" header="Expira" sortable></Column>
                    <Column field="baja" header="Baja" body={bajaTemplate} sortable></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                    <Column body={estadoTemplate} field="estado" header="Estado" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
}
