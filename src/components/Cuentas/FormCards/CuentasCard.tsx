import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputData } from '../../shared/InputData/InputData';
import { useFormik } from 'formik';
import { CuentaFormType, GeneralType } from '../types';
import { useRecoilState } from 'recoil';
import { generalCardFormState } from '../../../atoms/CuentasAtoms';
import { useEffect, useState } from 'react';
import { Divider } from 'primereact/divider';
import { InputTextField, CalendarField, InputTextareaField, InputMaskField } from '../../shared/inputFields';
import { validacionCuentaCard } from './validacionCuentaForm';


export const CuentasCard = () => {

  const [cuentaForm, setCuentaForm] = useRecoilState<any>(generalCardFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: CuentaFormType = {
    cuenta: '',
    fechaAlta: undefined,
    descripcion: '',
    correo: '',
    phone: ''
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
    setCuentaForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  return loading === true ? (
    <>
      <form onSubmit={cuentaForm.handleSubmit} className="flex flex-column gap-4">
        <FormCardTemplate titulo='Generales'>

          <div className="flex flex-row gap-4 tw--w-full">

            <InputTextField
              label="Nombre de la cuenta"
              name="cuenta"
              placeholder='Nombre de la cuenta'
              formikState={generalCardFormState}
            ></InputTextField>

            <CalendarField
              label="Fecha de Alta:"
              placeholder="DD/MM/AAAA"
              name='fechaAlta'
              formikState={generalCardFormState}
            />
          </div>
          <InputTextareaField
            label="Descripción"
            placeholder="Descripción"
            name='descripcion'
            formikState={generalCardFormState}
          />

          <Divider />

          <div className="flex flex-row gap-4 tw--w-full">
            <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Contacto</p>
          </div>

          <div className="flex flex-row gap-4 tw-w-full">
            <InputTextField
              label="Correo de la Empresa"
              placeholder="correo@dominio.com"
              name='correo'
              formikState={generalCardFormState}
            />
            <InputMaskField
              label="Número de la empresa"
              placeholder="99-9999-9999"
              name='phone'
              formikState={generalCardFormState}
            />
          </div>


        </FormCardTemplate>
        <div className='flex tw-justify-center tw-w-full gap-4 tw-text-sm tw-font-semibold'>
          <button type='reset'
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
            onClick={() => formik.resetForm()}
          >
            Cancelar
          </button>
          <button type="submit"
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white tw-bg-blue-600`}
          >
            Agregar
          </button>
        </div>
      </form>
    </>

  ) : null
}
