import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputData } from '../../shared/InputData/InputData';
import { useFormik } from 'formik';
import { GeneralType } from '../types';
import { validationGeneralCard } from './validaciones/ValidacionGeneralesCard';

export const GeneralesCard = () => {

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

  return (

    <FormCardTemplate titulo='Generales'>
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-4">
        <div className="flex flex-row gap-4 tw--w-full">
          <InputData
            type='inputtext'
            label='Nombre de la cuenta'
            placeholder="Nombre de la cuenta"
            name='cuenta'
            onchange={handleChange}
            value={values.cuenta}
          />
          <InputData
            type="calendar"
            label="Fecha de Alta:"
            placeholder="DD/MM/AAAA"
            name='fechaAlta'
            onchange={handleChange}
            value={values.fechaAlta}
          />
        </div>
        <InputData
          type="textarea"
          label="Descripción"
          placeholder="Ingresar"
          name='descripcion'
          onchange={handleChange}
          value={values.descripcion}
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
