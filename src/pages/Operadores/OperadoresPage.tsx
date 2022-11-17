import React from 'react'

import { OperadoresDataTable } from '../../components/Operadores/OperadoresDataTable'
import { TipoOperadorCard } from '../../components/Operadores/TipoOperadorCard'
import { typeOperadores } from '../../data/dataOperadores'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'



export const OperadoresPage = () => {
  const title = {
    title: 'Operadores',
    descr: 'Agrega, edita o da de baja a las personas que tendrán acceso al sistema Glass con sus diferentes niveles de permisos (roles).'
  }
  return (
    <ContentTemplate titleProps={title}>
      <>
        <div className="flex tw-w-full gap-4">
          {
            typeOperadores.map((tipo) => (<TipoOperadorCard key={tipo.type} type={tipo.type} number={tipo.number} />))
          }

        </div>
        <OperadoresDataTable />
      </>
    </ContentTemplate>
  )
}
