import React from 'react'
import { CuentasDataTable } from '../../components/Cuentas/CuentasDataTable'
import { TipoCuentaCard } from '../../components/Cuentas/TipoCuentaCard'
import { typeCuentas } from '../../data/data'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'

export const CuentasPage = () => {
  const title ={
    title: 'Cuentas',
    descr: 'Da de alta, modifica y desactiva cuentas',
    catalog: true
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
