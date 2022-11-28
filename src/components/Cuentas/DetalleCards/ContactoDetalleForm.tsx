import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { contactoDetalleFormState } from '../../../atoms/CuentasAtoms';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { ContactoType, propDetalleType } from '../types';
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { InputMaskField } from '../../shared/inputFields/InputMaskField';
import { getContactobyId } from '../../../helpers/getCuentabyId';
import { validacionContactoDetalle } from './validacionCuentaDetalle';

export const ContactoDetalleForm = ({id}:propDetalleType) => {

  const atomState: RecoilState<{}> = contactoDetalleFormState;

  const [contactoForm, setContactoForm] = useRecoilState<any>(atomState)

  const [loading, setLoading] = useState(false)

  const valorInicial: ContactoType = {
    correo: '',
    phone: "00-0000-0000",
  }

  useEffect(() => {
    const values = getContactobyId(id)
    formik.setValues ({
      "correo" : `${values? values.correo : ''}`,
      "phone" : `${values? values.phone : ''}`,
    })   
  }, [])

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: ContactoType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionContactoDetalle,
  });

  useEffect(() => {
    setContactoForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  return loading === true ? (
    <FormCardTemplate titulo='Contacto'>
      <form onSubmit={contactoForm.handleSubmit} className="flex flex-column gap-4" id="Contacto">
        <div className="flex flex-row gap-4 tw-w-full">
          <InputTextField
            label="Correo de la Empresa"
            placeholder="correo@dominio.com"
            name='correo'
            formikState={atomState}
          />
          <InputMaskField
            label="Número de la empresa"
            placeholder="99-9999-9999"
            name='phone'
            formikState={atomState}
          />
        </div>

        <div className='flex tw-justify-end tw-w-full gap-4 tw-text-sm tw-font-semibold'>
          <button type='reset'
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
            onClick={() => formik.resetForm()}
          >
            Cancelar
          </button>
          <button type="submit"
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white tw-bg-blue-600`}
          >
            Guardar
          </button>
        </div>
      </form>
    </FormCardTemplate>

  ): null
}
