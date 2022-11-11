import { useState } from 'react'

import { Checkbox } from 'primereact/checkbox';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cuentas } from '../../data/data';
import { getTemplates } from '../shared/dataTables/templates/getTemplates';

export const CuentasDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);

    const { imageLogoTemplate, contratadoTemplate, detalleTemplate, estadoTemplate } = getTemplates();

    return (
        <div className='tw-w-full flex'>
            <div className="tw-w-full">
                <DataTable value={cuentas} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id" className='tw-w-full'>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column body={imageLogoTemplate} header="Logo" ></Column>
                    <Column field="name" header="Cuenta" sortable></Column>
                    <Column field="alta" header="Alta" sortable></Column>
                    <Column body={contratadoTemplate} filterField="contratados" header="Contratados" className='flex tw-justify-center' sortable></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                    <Column body={estadoTemplate} filterField="estado" header="Estado" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
}
