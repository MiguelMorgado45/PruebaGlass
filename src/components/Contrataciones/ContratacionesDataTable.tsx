import {useState} from 'react' 

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
 
import { getTemplates } from '../shared/dataTables/templates/getTemplates';
import { contrataciones } from '../../data/dataContrataciones';
import { getLogoProductos } from '../../helpers/getLogoProductos';

export const ContratacionesDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);
    
    const {imageLogoTemplate, detalleTemplate, estadoTemplate, personasTemplate} = getTemplates();

    const bajaTemplate = (rowData: any) => {
        const [baja, setBaja] = useState(rowData.baja)
        return <InputSwitch checked={baja} onChange={(e) => setBaja(e.value)}/>
    }

    const productLogoTemplate = (rowData: any) => {
        return <img src={getLogoProductos(rowData.name)} alt={rowData.name} className='tw-w-8 ' />
    }

    return (
        <div className='tw-w-full'>
            <div className="tw-w-full">
                <DataTable value={contrataciones} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id">
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
