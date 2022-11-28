import { Menu } from 'primereact/menu'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'
import { useParams } from 'react-router-dom';
import { GeneralesDetalleForm } from '../../components/Contrataciones/Detalles/GeneralesDetalleForm';
import { ContactoDetalleForm } from '../../components/Contrataciones/Detalles/ContactoDetalleForm';
import {menuItems} from '../../helpers/menuItems'


export const DetalleContratacionPage = () => {

  const title = {
    title: 'Contrataciones',
    breadcrums: true
  }

  const {id} = useParams();

  const { detalleContratacionesItems } = menuItems();

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray tw-sticky tw-top-2'>MENU</span>
          <Menu model={detalleContratacionesItems} className=' tw-m-4 tw-w-full tw-p-2 tw-sticky tw-top-10' />

        </div>
        <div className="tw-w-4/5 flex flex-column">
            <GeneralesDetalleForm id={id}/>
            <ContactoDetalleForm id={id}/>
        </div>
      </div >
    </ContentTemplate>
  )
}
