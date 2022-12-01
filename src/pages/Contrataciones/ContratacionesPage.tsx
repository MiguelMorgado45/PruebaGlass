import { Carousel } from 'primereact/carousel';

import { typeProductos } from '../../data/dataContrataciones'

import { ContratacionesDataTable } from '../../components/Contrataciones/ContratacionesDataTable'
import { TipoProductosCard } from '../../components/Contrataciones/TipoProductosCard'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'
import '../../styles/contrataciones.css'

export const ContratacionesPage = () => {
  const title = {
    title: 'Contrataciones',
    descr: 'Los productos adquiridos/contratados por los clientes.'
  }

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  return (
    <ContentTemplate titleProps={title}>
      <>
        <div className='flex flex-column gap-4 tw-absolute w-carousel'>
          <Carousel className='tw-w-full' responsiveOptions={responsiveOptions} value={typeProductos} numVisible={5} numScroll={1} itemTemplate={TipoProductosCard} />
        </div>
        <div className='flex tw-w-full tw-mt-60'>
          <ContratacionesDataTable />
        </div>
      </>
    </ContentTemplate>
  )
}