import React from 'react'

import { useParams } from 'react-router-dom';
import { getClientebyId } from '../../helpers/getClientebyId';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';

export const DetalleClientePage = () => {
  const { id } = useParams();
  const cliente = getClientebyId(id);

  const title = {
    title: `Clientes / ${cliente?.name}`,
    descr: cliente?.alta,
    add: true
  }
  return (
    <>

      <ContentTemplate titleProps={title}>
        <p>{cliente?.name}</p>
        <p>{cliente?.alta}</p>
        <p>{cliente?.personas}</p>
        <p>{cliente?.operadores}</p>
      </ContentTemplate>

    </>
  )
}

