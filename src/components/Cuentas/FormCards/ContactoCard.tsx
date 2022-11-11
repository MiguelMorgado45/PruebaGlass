import { useField, useFormik } from 'formik';

import { InputText } from "primereact/inputtext";
import { InputMask } from 'primereact/inputmask';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

export const ContactoCard = () => {
  const formik = useFormik({
    initialValues: { correo: '', phone: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {  handleChange ,values, setFieldValue } = formik

  const [{ onChange }] = useField<string>("correo");

  return (
    <FormCardTemplate titulo='Contacto'>
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-4">
        <div className="flex flex-row gap-4 tw-w-full">
          <div className="flex flex-column gap-1 tw-w-full">
            <label className="tw-font-semibold">
              Correo de la empresa
            </label>
            <InputText
              placeholder="correo@dominio.com"
              name='correo'
              onchange={onChange}
              value={values.correo}
            />
          </div>
          <div className="flex flex-column gap-1 tw-w-full">
            <label className="tw-font-semibold">
              Número de la empresa
            </label>
            <InputMask
              placeholder="99-9999-9999"
              name='phone'
              onchange={(event: any) => {
                setFieldValue('phone', event.value)
              }}
              mask="99-9999-9999"
              value={(values.phone)}
            />
          </div>
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
