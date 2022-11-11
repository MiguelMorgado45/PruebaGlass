import { useFormik } from 'formik';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputData } from '../../shared/InputData/InputData';


export const ContactoCard = () => {
  const formik = useFormik({
    initialValues: { correo: '', phone: null },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { handleChange, values, setFieldValue } = formik


  return (
    <FormCardTemplate titulo='Contacto'>
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-4">
        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="inputtext"
            label="Correo de la Empresa"
            placeholder="correo@dominio.com"
            name='correo'
            onchange={handleChange}
            value={values.correo}
          />
          <InputData
            type="phone"
            label="Número de la empresa"
            placeholder="99-9999-9999"
            name='phone'
            onchange={(event: any) => {
              setFieldValue('phone', event.value)
            }}
            value={values.phone}
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
