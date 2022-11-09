import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { cuentas } from '../../data/data';

export const EjDataTable = () => {
    
    const imageLogoTemplate = (rowData:any) =>{
        return <img src={rowData.logo} alt={rowData.name} className='glass-w-10 '/>
    }

    const contratadoTemplate = (rowData:any) =>{
        return <div className={`glass-text-sm glass-w-fit glass-font-semibold glass-p-3 glass-rounded-full glass-bg-purple-200 glass-text-purple-900 `}>{rowData.contratados}</div>
    }

    const detalleTemplate = (rowData:any) =>{
        return <button className={`glass-text-sm glass-w-16  glass-bg-gray-300 glass-h-fit
        glass-px-3 glass-py-2 glass-rounded-md glass-text-gray-700`}>Ver</button>
    }

    const estadoTemplate = (rowData:any) =>{
        return <div className={`glass-text-sm glass-w-20 glass-h-fit
        glass-px-2 glass-py-2 glass-rounded-lg ${rowData.estado == 'activo' ? 'glass-bg-green-200 glass-text-green-900' : 'glass-bg-red-200 glass-text-red-900'}`}>{rowData.estado}</div>
    }

    return (
        <div className='glass-w-full'>
            <div className="card glass-w-full">
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
