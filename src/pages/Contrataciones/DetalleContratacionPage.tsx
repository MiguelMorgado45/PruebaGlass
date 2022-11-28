import { Menu } from 'primereact/menu'
import React from 'react'
import { ContactoDetalleCard } from '../../components/Contrataciones/Detalles/ContactoDetalleCard'
import { GeneralesDetalleCard } from '../../components/Contrataciones/Detalles/GeneralesDetalleCard'

import { CuentasCard } from '../../components/Cuentas/FormCards/CuentasCard'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'
import { useParams } from 'react-router-dom';

export const DetalleContratacionPage = () => {

  const title = {
    title: 'Contrataciones',
    breadcrums: true
  }

  const {id} = useParams();

  const items = [
    {
      icon: 'pi pi-briefcase',
      label: 'Generales',
      command: (event: any) => {
        window.location.hash = "Generales";
      }
    },
    {
      icon: 'pi pi-user',
      label: 'Contacto',
      command: (event: any) => {
        window.location.hash = "Contacto";
      }
    },

  ];

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray tw-sticky tw-top-2'>MENU</span>
          <Menu model={items} className=' tw-m-4 tw-w-full tw-p-2 tw-sticky tw-top-10' />

        </div>
        <div className="tw-w-4/5 flex flex-column">
            <GeneralesDetalleCard id={id}/>
            <ContactoDetalleCard id={id}/>
        </div>
      </div >
    </ContentTemplate>
  )
}
