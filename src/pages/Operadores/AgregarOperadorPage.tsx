import { Menu } from 'primereact/menu';

import { OperadorCard, PerfilCard, RolesCard } from '../../components/Operadores/FormCards';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import '../../styles/operadores.css'
import { CardTemplate } from '../../templates/CardTemplate/CardTemplate';
import { InputData } from '../../components/shared/InputData/InputData';

export const AgregarOperadorPage = () => {
  const title = {
    title: 'Operadores',
    breadcrums: true,
    add: true,
  }
  const items = [
    {
      icon: 'pi pi-briefcase',
      label: 'Operador',
      command: (event: any) => {
        window.location.hash = "Operador";
      }
    },
    {
      icon: 'pi pi-id-card',
      label: 'Asignar Roles',
      command: (event: any) => {
        window.location.hash = "Roles";
      }
    },

  ];

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/4 flex flex-column">
          <PerfilCard />
          <Menu model={items} className=' tw-m-4 tw-w-full tw-p-2' />
          <CardTemplate name='ETIQUETAS' classname='tw-w-full'>
            <InputData
              label='Escribe y separa con comas'
              type='inputtext'
            />
          </CardTemplate>

        </div>
        <div className="tw-w-3/4 flex flex-column">
          <OperadorCard />
          <RolesCard />
          <div className='tw-w-full flex tw-justify-center gap-4 tw-mt-4'>

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