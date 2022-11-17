import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { useFormik } from 'formik';
import { GeneralType } from '../types';
import { RecoilState, useRecoilState } from 'recoil';
import { cuentaCardFormState } from '../../../atoms/FormAtoms';
import { useEffect } from 'react';
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { InputTextareaField } from '../../shared/inputFields/InputTextareaField';

export const GeneralesCard = () => {

  const atomState:RecoilState<{}> = cuentaCardFormState;

  const [generalForm, setGeneralForm] = useRecoilState<any>(cuentaCardFormState) 

  const valorInicial: GeneralType = {
    cuenta: '',
    fechaAlta: undefined,
    descripcion: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: GeneralType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    //validate: validationGeneralCard,
  });
  const { handleChange, values } = formik

  useEffect(() => {
    setGeneralForm(formik)
}, [formik.values, formik.errors, formik.touched])

  return (

    <FormCardTemplate titulo='Generales'>
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-4">
        <div className="flex flex-row gap-4 tw--w-full">
          <InputTextField
            label='Nombre de la cuenta'
            placeholder="Nombre de la cuenta"
            name='cuenta'
            formikState={atomState}
          />
          <CalendarField
            label="Fecha de Alta:"
            placeholder="DD/MM/AAAA"
            name='fechaAlta'
            formikState={atomState}
          />
        </div>
        <InputTextareaField
          label="Descripción"
          placeholder="Ingresar"
          name='descripcion'
          formikState={atomState}
        />

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
            Agregar
          </button>
        </div>
      </form>
    </FormCardTemplate>

  )
}
