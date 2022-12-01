import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useRecoilState } from 'recoil';

import { OperadoresFormType } from '../../components/Operadores/types';
import { validacionOperadorCard } from '../../components/Operadores/FormCards/validacionOperadoresForm';
import { operadorAgregaFormState } from '../../atoms/OperadorAtom';

import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import { OperadorCard } from '../../components/Operadores/FormCards';
import '../../styles/operadores.css'

export const AgregarOperadorPage = () => {

  const [operadorForm, setOperadorForm] = useRecoilState<any>(operadorAgregaFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: OperadoresFormType = {
    nombre: '',
    alta: '',
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