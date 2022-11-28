import { PerfilCard } from '../../components/Operadores/FormCards/PerfilCard'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'
import { OperadorDetalleCard } from '../../components/Operadores/detalles/OperadorDetalleCard';
import { useParams } from 'react-router-dom';


export const DetalleOperadorPage = () => {

  const { id } = useParams();

  const title = {
    title: 'Detalle',
    breadcrums: true,
  }

  return (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row" >
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard />
        </div>
        <div className="tw-w-4/5 flex flex-column">
          <OperadorDetalleCard id={id} />
        </div>
      </div >
    </ContentTemplate >
  )
}
