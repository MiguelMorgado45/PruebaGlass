import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';

import { contactoDetalleFormState } from '../../../atoms/CuentasAtoms';
import {  ContactoCuentaFormType, propDetalleType } from '../types';
import { validacionContactoDetalle } from './validacionCuentaDetalle';
import { getCuentabyId } from '../../../helpers/getCuentabyId';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputTextField, InputMaskField } from '../../shared/inputFields';


export const ContactoDetalleForm = ({id}:propDetalleType) => {

  const atomState: RecoilState<{}> = contactoDetalleFormState;
  const [contactoForm, setContactoForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false)

  const valorInicial: ContactoCuentaFormType = {
    correo: '',
    phone: "00-0000-0000",
  }

  const values = getCuentabyId(id)
  const cuentaData = {
    "correo" : `${values? values.correo : ''}`,
    "phone" : `${values? values.phone : ''}`,
  }

  useEffect(() => {
    formik.setValues (cuentaData)   
  }, [])


  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: ContactoCuentaFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
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
          <button type='button'
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
            onClick={() => formik.resetForm({values:cuentaData})}
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
