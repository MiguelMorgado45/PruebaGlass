import { Button } from 'primereact/button';

import { getLogoProductos } from '../../../helpers/getLogoProductos'
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate'

interface ProductsCardProps {
  products: string[]
}

export const ProductsCard = ({ products }: ProductsCardProps) => {
  return (
    <CardTemplate name='PRODUCTOS' classname='tw-w-full'>
      <div className='flex flex-column gap-2'>
        <p className='tw-font-semibold tw-text-sm'>Los que le van agregando...</p>
        <div className='flex gap-2'>
          {
            products.map(product => (<img src={getLogoProductos(product)}
              className='tw-w-12 tw-h-12'
            />))
          }
          <Button icon="pi pi-plus" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
        </div>
      </div>

    </CardTemplate>
  )
}
