
import { Menu } from 'primereact/menu';
import { ContactoCard } from '../../components/Cuentas/FormCards/ContactoCard';
import { GeneralesCard } from '../../components/Cuentas/FormCards/GeneralesCard';
import { PerfilCard } from '../../components/Cuentas/FormCards/PerfilCard';


import { menuItems } from '../../helpers/menuItems';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';

export const AgregarCuentasPage = () => {
  const title = {
    title: 'Cuentas',
    breadcrums: true,
    add: true,
  }

  const { cuentasItems } = menuItems();

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard />
          <Menu model={cuentasItems} className=' tw-m-4 tw-w-full tw-p-2' />

        </div>
        <div className="tw-w-4/5 flex flex-column">
          <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray'>DATOS</span>
          <GeneralesCard/>
          <ContactoCard/>
        </div>
      </div >
    </ContentTemplate >
  )
}


