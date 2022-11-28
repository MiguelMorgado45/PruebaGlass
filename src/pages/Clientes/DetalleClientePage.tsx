import { Menu } from 'primereact/menu';
import { useParams } from 'react-router-dom';
import { getClientebyId } from '../../helpers/getClientebyId';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';;
import '../../styles/clientes.css'
import { GeneralesDetalleCard } from '../../components/Clientes/Detalles/GeneralesDetalleCard';
import { DomicilioDetalleCard } from '../../components/Clientes/Detalles/DomicilioDetalleCard';

export const DetalleClientePage = () => {
  const { id } = useParams();
  const cliente = getClientebyId(id);

  const title = {
    title: `Clientes / ${cliente?.name}`,
    breadcrums: true,
  }

  const items = [
    // {
    //   icon: 'pi pi-box',
    //   label: 'Cuenta',
    //   command: (event: any) => {
    //     window.location.hash = "Cuenta";
    //   }
    // },
    {
      icon: 'pi pi-briefcase',
      label: 'Generales',
      command: (event: any) => {
        window.location.hash = "Generales";
      }
    },
    {
      icon: 'pi pi-home',
      label: 'Domicilio',
      command: (event: any) => {
        window.location.hash = "Domicilio";
      }
    },
    // {
    //   icon: 'pi pi-user',
    //   label: 'Contacto',
    //   command: (event: any) => {
    //     window.location.hash = "Contacto";
    //   }
    // },
    // {
    //   icon: 'pi pi-thumbs-down',
    //   label: 'Desactivar',
    //   command: (event: any) => {
    //     window.location.hash = "Desactivar";
    //   }
    // },

  ];

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray tw-sticky tw-top-2'>MENU</span>
          <Menu model={items} className=' tw-m-4 tw-w-full tw-p-2 tw-sticky tw-top-10' />
        </div>
        <div className="tw-w-4/5 flex flex-column">
            <GeneralesDetalleCard id = {id} />
            <DomicilioDetalleCard id = {id} />
        </div>
      </div >
    </ContentTemplate >
  )
}

