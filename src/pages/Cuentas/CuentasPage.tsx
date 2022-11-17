import React from 'react'
import { Link } from 'react-router-dom'
import { CuentasDataTable } from '../../components/Cuentas/CuentasDataTable'
import { TipoCuentaCard } from '../../components/Cuentas/TipoCuentaCard'
import { typeCuentas } from '../../data/data'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'

export const CuentasPage = () => {
  const title ={
    title: 'Cuentas',
    descr: 'Da de alta, modifica y desactiva cuentas',
    children: (
      <Link to={`agregar`}>
        <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold tw-bg-blue-600 tw-h-fit
      tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}><i className='pi pi-plus tw-mr-2'></i> Agregar</button>
      </Link>
    )
  }
  return (
    <ContentTemplate titleProps={title} >
      <>
        <div className="flex tw-w-full gap-4">
            {
              typeCuentas.map((tipo) => (<TipoCuentaCard key={tipo.type} type={tipo.type} number={tipo.number}/>))
            }
            
        </div>
        <CuentasDataTable/>
      </>
    </ContentTemplate>
  )
}
