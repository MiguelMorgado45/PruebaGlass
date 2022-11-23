import { Menu } from 'primereact/menu'
import { menuItems } from '../../helpers/menuItems';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import { GeneralesDetalleCard } from '../../components/Cuentas/DetalleCards/GeneralesDetalleCard';
import { ContactoDetalleCard } from '../../components/Cuentas/DetalleCards/ContactoDetalleCard';
import { VendedorDetalleCard } from '../../components/Cuentas/DetalleCards/VendedorDetalleCard';
import { TipoCuentaDetalleCard } from '../../components/Cuentas/DetalleCards/TipoCuentaDetalleCard';
import { useEffect, useState } from 'react';
import { getMinidashbyId } from '../../helpers/getCuentabyId';
import { CardTemplate } from '../../templates/CardTemplate/CardTemplate';
import { PerfilCard } from '../../components/Clientes/FormCards';
import { typeDetallesCuentas } from '../../data/data';

const { cuentasItems } = menuItems();

export const DetalleCuentaPage = () => {

  const [tipo, setTipos] = useState<any>({
    clientes: '',
    operadores: '',
    vendedor: '',
    encargado: ''
  })

  const title = {
    title: 'Cuentas',
    breadcrums: true,
  }

  const id = JSON.parse(localStorage.getItem('id') || '{}');

  useEffect(() => {
    const values = getMinidashbyId(id)
    setTipos({
      clientes: values?.clientes,
      operadores: values?.operadores,
      vendedor: values?.vendedor,
      encargado: values?.encargado
    })
  }, [])

  return (
    <ContentTemplate titleProps={title}>
      <div className="flex tw-w-full gap-4 tw-p-4 tw-sticky tw-top-0 tw-bg-gray-glass-back tw-z-10">
        {
          typeDetallesCuentas.map((cuenta) =>
          (<TipoCuentaDetalleCard
            key={cuenta.type}
            message={tipo[cuenta.code]}
            type={cuenta.type}
            number={cuenta.number}
            color={cuenta.color}
            icon={cuenta.icon}
          />))
        }
      </div>

      <div className="tw-w-full tw-h-full gap-6 flex flex-row" >
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard />
          {/* <span className='tw-mx-4 tw-w-full tw-text-sm tw-font-medium tw-text-gray-gray tw-sticky tw-top-28 tw-bg-gray-glass-back tw-z-10'>MENU</span> */}
          <Menu model={cuentasItems} className=' tw-m-4 tw-w-full tw-p-2 tw-sticky tw-top-28' />
        </div>
        <div className="tw-w-4/5 flex flex-column">
          <CardTemplate name="DATOS">
            <GeneralesDetalleCard id={id} />
          </CardTemplate>

          <ContactoDetalleCard id={id} />
          <VendedorDetalleCard id={id} />
        </div>
      </div >
    </ContentTemplate >
  )
}
