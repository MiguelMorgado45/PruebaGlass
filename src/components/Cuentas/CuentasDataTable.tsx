import { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cuentas } from '../../data/data';
import { getTemplates } from '../shared/dataTables/templates/getTemplates';
import { useNavigate } from 'react-router-dom';


export const CuentasDataTable = () => {

    const [selectedCuentas, setSelectedCuentas] = useState(null);

    const { imageLogoTemplate, contratadoTemplate, detalleTemplate, estadoTemplate } = getTemplates();

    const navigate = useNavigate();

    const navegarAgregarCl = (id:any) => {
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`/clientes/agregar`)

    }

    const navegarAgregarOp = (id:any) => {
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`/operadores/agregar`)

    }

    const agregarClienteTempalete = (rowData: any) => {
        return(
            <button onClick={() => navegarAgregarCl(rowData.id)}
             className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Agregar</button>
        ) 
        

    }
    const agregarOperadorTempalete = (rowData: any) => {
        return(
            <button onClick={() => navegarAgregarOp(rowData.id)}
             className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Agregar</button>
        ) 
        

    }


    return (
        <div className='tw-w-full flex'>
            <div className="tw-w-full">
                <DataTable value={cuentas} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id" className='tw-w-full'>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column body={imageLogoTemplate} header="Logo" ></Column>
                    <Column field="name" header="Cuenta" sortable></Column>
                    <Column field="alta" header="Alta" sortable></Column>
                    <Column body={agregarClienteTempalete} header='Cliente'></Column>
                    <Column body={agregarOperadorTempalete} header='Operador'></Column>
                    <Column body={detalleTemplate} header="Detalles" ></Column>
                </DataTable>
            </div>
        </div>
    );
}
