import { Menu } from 'primereact/menu';
import { ContactoCard, CuentaCard, DomicilioCard, GeneralesCard, PerfilCard } from '../../components/Clientes/FormCards';
import { DesactivarCard } from '../../components/Clientes/FormCards/DesactivarCard';

import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';

export const AgregarClientePage = () => {
  const title = {
    title: 'Clientes',
    breadcrumbs: true,
    add: true,
  }
  const items = [
    {
      icon: 'pi pi-box',
      label: 'Cuenta',
      command: (event: any) => {
        window.location.hash = "Cuenta";
      }
    },
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
    {
      icon: 'pi pi-user',
      label: 'Contacto',
      command: (event: any) => {
        window.location.hash = "Contacto";
      }
    },
    {
      icon: 'pi pi-thumbs-down',
      label: 'Desactivar',
      command: (event: any) => {
        window.location.hash = "Desactivar";
      }
    },

  ];

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard />
          <Menu model={items} className=' tw-m-4 tw-w-full tw-p-2' />

        </div>
        <div className="tw-w-4/5 flex flex-column">
          <CuentaCard />
          <GeneralesCard />
          <DomicilioCard />
          <ContactoCard />
          <DesactivarCard />
          <div className='tw-w-full flex tw-justify-center gap-4'>

            <button type='reset'
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
              Cancelar
            </button>

            <button type="submit"
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit
                  tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
              Añadir
            </button>

          </div>
        </div>
      </div >
    </ContentTemplate >
  )
}
