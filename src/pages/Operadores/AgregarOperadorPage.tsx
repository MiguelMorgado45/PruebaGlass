import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import '../../styles/operadores.css'
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { OperadoresFormType } from '../../components/Operadores/types';
import { validacionOperadorCard } from '../../components/Operadores/FormCards/validacionOperadoresForm';
import { useRecoilState } from 'recoil';
import { operadorCardFormState } from '../../atoms/FormAtoms';
import { OperadorCard } from '../../components/Operadores/FormCards';

export const AgregarOperadorPage = () => {

  const [operadorForm, setOperadorForm] = useRecoilState<any>(operadorCardFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: OperadoresFormType = {
    nombre: '',
    fechaAlta: '',
    correo: '',
    telefono: '',
    descripcion: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: OperadoresFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionOperadorCard,
  });

  useEffect(() => {
    setOperadorForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])


  const title = {
    title: 'Operadores',
    breadcrums: true,
  }

  return loading === true ? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full flex flex-column tw-mx-20">
        <form onSubmit={operadorForm.handleSubmit}>
            <OperadorCard/>
        </form>
      </div >
    </ContentTemplate >
  ) : null
}