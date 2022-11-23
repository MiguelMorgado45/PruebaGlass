import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { cuentaCardFormState } from '../../atoms/FormAtoms';

import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import { useFormik } from 'formik';
import { CuentaFormType } from '../../components/Cuentas/types';
import { validacionCuentaCard, validacionCuentaCardAgregar } from '../../components/Cuentas/FormCards/validacionCuentaForm';
import { GeneralesCard } from '../../components/Cuentas/FormCards/GeneralesCard';

export const AgregarCuentaPage = () => {

  const title = {
    title: `Cuentas`,
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
    validate: validacionCuentaCardAgregar
  });

  useEffect(() => {
    setClienteForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  

  return loading === true ? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full flex flex-column tw-mx-48">

        <form onSubmit={clienteForm.handleSubmit}>
          <GeneralesCard/>
        </form>

      </div>
    </ContentTemplate >
  ) : null
}
