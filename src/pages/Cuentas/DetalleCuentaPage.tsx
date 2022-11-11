import { useLocation, useParams } from 'react-router-dom'
import { getCuentabyId } from '../../helpers/getCuentabyId';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';

export const DetalleCuentaPage = () => {
  const { id } = useParams();
  const cuenta = getCuentabyId(id);

  const location = useLocation();

  const title = {
    title: `Cuentas / ${cuenta?.name}`,
    descr: cuenta?.alta,
    add: true,
    breadcrums: true,
  }
  return (
    <>

      <ContentTemplate titleProps={title}>
        <p>{cuenta?.name}</p>
        <p>{cuenta?.alta}</p>
        <p>{cuenta?.contratados}</p>
        <p>{cuenta?.estado}</p>
        <p>{location.pathname}</p>
      </ContentTemplate>

    </>
  )
}
