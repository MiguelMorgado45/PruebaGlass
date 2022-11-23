import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { cuentaCardFormState } from '../../atoms/FormAtoms';

import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import { useFormik } from 'formik';
import { CuentaFormType } from '../../components/Cuentas/types';
import { validacionCuentaCard } from '../../components/Cuentas/FormCards/validacionCuentaForm';

export const AgregarCuentaPage = () => {

  const title = {
    title: `Clientes`,
    breadcrums: true,
  }

  const atomState: RecoilState<{}> = cuentaCardFormState;
  const [clienteForm, setClienteForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: CuentaFormType = {
    cuenta: '',
    descripcion: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: CuentaFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionCuentaCard,
  });

  useEffect(() => {
    setClienteForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  

  return loading === true ? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full flex flex-column tw-mx-20">

        <form onSubmit={clienteForm.handleSubmit}>

        </form>

      </div>
    </ContentTemplate >
  ) : null
}
