import { useEffect, useState } from 'react'
import { PerfilCard } from '../../components/Operadores/FormCards/PerfilCard'
import { CardTemplate } from '../../templates/CardTemplate/CardTemplate'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'
import { OperadorDetalleCard } from '../../components/Operadores/detalles/OperadorDetalleCard';
import { useFormik } from 'formik';
import { OperadoresDetalleType } from '../../components/Operadores/types';
import { useRecoilState } from 'recoil';
import { operadorDetalleFormState } from '../../atoms/OperadorAtom';
import { validacionOperadorDetallesCard } from '../../components/Operadores/detalles/validacionOperadoresDetalleForm';
import { useLocation } from 'react-router-dom';
import { getOperadorbyId } from '../../helpers/getOperadorbyId';

export const DetalleOperadorPage = () => {

  const location = useLocation();
  const [operador, setOperador] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    area: '',
    fechaAlta: ''
  })
  const [operadorForm, setOperadorForm] = useRecoilState<any>(operadorDetalleFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: OperadoresDetalleType = {
    nombre: '',
    correo: '',
    telefono: '',
    area: '',
    alta: ''
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: any, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionOperadorDetallesCard
  });

  useEffect(() => {
    setOperadorForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  useEffect(() => {
    const values = getOperadorbyId(location.state.id)
    formik.setValues({
      nombre: values? values.name : '',
      correo: values? values.usuario : '',
      telefono: values? values.telefono : '',
      area: values? values.area : '',
      alta: values? values.alta : ''
    })

  }, [])

  const title = {
    title: 'Detalle',
    breadcrums: true,
  }

  return loading === true ? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row" >
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard />
        </div>
        <div className="tw-w-4/5 flex flex-column">
          <form onSubmit={operadorForm.handleSubmit}>
            <CardTemplate name="DATOS">
              <OperadorDetalleCard />
            </CardTemplate>
          </form>
        </div>
      </div >
    </ContentTemplate >
  ) : null
}
