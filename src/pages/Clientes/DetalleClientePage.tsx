import { Menu } from 'primereact/menu';
import { useParams } from 'react-router-dom';

import {menuItems} from '../../helpers/menuItems'
import { getClientebyId } from '../../helpers/getClientebyId';

import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';;
import { DomicilioDetalleForm, GeneralesDetalleForm } from '../../components/Clientes/Detalles';
import '../../styles/clientes.css'
import { PerfilCard } from '../../components/shared/PerfilCard';

export const DetalleClientePage = () => {
  const { id } = useParams();
  const cliente = getClientebyId(id);

  const title = {
    title: `Clientes / ${cliente?.nombreComercial}`,
    breadcrums: true,
  }

  const {detalleClienteitems} = menuItems();

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard/>
          <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray tw-sticky tw-top-2'>MENU</span>
          <Menu model={detalleClienteitems} className=' tw-m-4 tw-w-full tw-p-2 tw-sticky tw-top-10' />
        </div>
        <div className="tw-w-4/5 flex flex-column">
            <GeneralesDetalleForm id = {id} />
            <DomicilioDetalleForm id = {id} />
        </div>
      </div >
    </ContentTemplate >
  )
}

