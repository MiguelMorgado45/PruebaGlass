import { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { cuentas } from '../../data/data';
import { getTemplates } from '../shared/dataTables/templates/getTemplates';


export const CuentasDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);

    const { imageLogoTemplate, detalleTemplate, agregarClienteTemplate, agregarOperadorTemplate } = getTemplates();


    return (
        <div className='tw-w-full flex'>
            <div className="tw-w-full">
                <DataTable value={cuentas} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id" className='tw-w-full'>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column body={imageLogoTemplate} header="Logo" ></Column>
                    <Column field="name" header="Cuenta" sortable></Column>
                    <Column field="alta" header="Alta" sortable></Column>
                    <Column body={agregarClienteTemplate} header='Cliente'></Column>
                    <Column body={agregarOperadorTemplate} header='Operador'></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                </DataTable>
            </div>
        </div>
    );
}
