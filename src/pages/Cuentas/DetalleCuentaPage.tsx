import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Menu } from 'primereact/menu'

import { typeDetallesCuentas } from '../../data/data';
import { menuItems } from '../../helpers/menuItems';
import { getMinidashbyId } from '../../helpers/getCuentabyId';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import { CardTemplate } from '../../templates/CardTemplate/CardTemplate';
import { PerfilCard } from '../../components/shared/PerfilCard';

import { GeneralesDetalleForm } from '../../components/Cuentas/DetalleCards/GeneralesDetalleForm';
import { ContactoDetalleForm } from '../../components/Cuentas/DetalleCards/ContactoDetalleForm';
import { VendedorDetalleForm } from '../../components/Cuentas/DetalleCards/VendedorDetalleForm';
import { TipoCuentaDetalleCard } from '../../components/Cuentas/DetalleCards/TipoCuentaDetalleCard';

const { cuentasItems } = menuItems();

export const DetalleCuentaPage = () => {

  const {id} = useParams();
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
          <Menu model={cuentasItems} className=' tw-m-4 tw-w-full tw-p-2 tw-sticky tw-top-28' />
        </div>
        <div className="tw-w-4/5 flex flex-column">
          <CardTemplate name="DATOS">
            <GeneralesDetalleForm id={id} />
          </CardTemplate>

          <ContactoDetalleForm id={id} />
          <VendedorDetalleForm id={id} />
        </div>
      </div >
    </ContentTemplate >
  )
}
