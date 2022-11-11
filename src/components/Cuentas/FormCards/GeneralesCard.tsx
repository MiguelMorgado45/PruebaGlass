import { useFormik } from 'formik';

import { Calendar } from 'primereact/calendar';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

export const GeneralesCard = () => {

  const formik = useFormik({
    initialValues: { cuenta: '', fechaAlta: undefined, desc: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { handleChange, values } = formik

  return (

    <FormCardTemplate titulo='Generales'>
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-4 tw-items-end">
        <div className="flex flex-row gap-4 tw-w-full">
          <div className="flex flex-column gap-1 tw-w-full">
            <label className="tw-font-semibold">
              Nombre de la cuenta:
            </label>
            <InputText
              placeholder="Nombre de la cuenta"
              name='cuenta'
              onchange={handleChange}
              value={values.cuenta}
            />
          </div>
          <div className="flex flex-column gap-1 tw-w-full">
            <label className="tw-font-semibold">
              Fecha Alta:
            </label>
            <Calendar
              placeholder="DD/MM/AAAA"
              name='fechaAlta'
              onchange={handleChange}
              value={values.fechaAlta}
            />
          </div>
        </div>

        <div className="flex flex-column gap-1 tw-w-full">
            <label className="tw-font-semibold">
              Descripción: 
            </label>
            <InputTextarea
              placeholder="Ingresar"
              name='desc'
              onchange={handleChange}
              value={values.desc}
            />
          </div>

        <div className='flex tw-justify-end tw-w-full gap-4 tw-text-sm tw-font-semibold'>
          <button type='reset'
            className={`tw-w-40 tw-h-fit 
                        tw-px-4 tw-py-3 tw-rounded-md
                      tw-text-gray-600 tw-bg-gray-200`}
            onClick={formik.resetForm}
          >
            Cancelar
          </button>
          <button type="submit"
            className={`tw-w-40 tw-h-fit 
                        tw-px-4 tw-py-3 tw-rounded-md 
                      tw-text-white tw-bg-blue-600`}
          >
            Agregar
          </button>
        </div>
      </form>
    </FormCardTemplate>

  )
}
