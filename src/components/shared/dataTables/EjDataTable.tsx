import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cuentas } from '../../data/data';

export const EjDataTable = () => {
    
    const imageLogoTemplate = (rowData:any) =>{
        return <img src={rowData.logo} alt={rowData.name} className='tw-w-10 '/>
    }

    const contratadoTemplate = (rowData:any) =>{
        return <div className={`tw-text-sm tw-w-fit tw-font-semibold tw-p-3 tw-rounded-full tw-bg-purple-200 tw-text-purple-900 `}>{rowData.contratados}</div>
    }

    const detalleTemplate = (rowData:any) =>{
        return <button className={`tw-text-sm tw-w-16  tw-bg-gray-300 tw-h-fit
        tw-px-3 tw-py-2 tw-rounded-md tw-text-gray-700`}>Ver</button>
    }

    const estadoTemplate = (rowData:any) =>{
        return <div className={`tw-text-sm tw-w-20 tw-h-fit
        tw-px-2 tw-py-2 tw-rounded-lg ${rowData.estado == 'activo' ? 'tw-bg-green-200 tw-text-green-900' : 'tw-bg-red-200 tw-text-red-900'}`}>{rowData.estado}</div>
    }

    return (
        <div className='tw-w-full'>
            <div className="card tw-w-full">
                <DataTable value={cuentas} responsiveLayout="scroll">
                    <Column body={imageLogoTemplate} header="Logo"></Column>
                    <Column field="name" header="Cuenta"></Column>
                    <Column field="alta" header="Alta"></Column>
                    <Column body={contratadoTemplate} header="Contratados"></Column>
                    <Column body={detalleTemplate} header="Detalles"></Column>
                    <Column body={estadoTemplate} header="Estado"></Column>
                </DataTable>
            </div>
        </div>
    );
}
