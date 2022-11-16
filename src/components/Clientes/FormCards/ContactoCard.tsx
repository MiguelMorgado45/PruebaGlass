import { useFormik } from 'formik';

import { Checkbox } from 'primereact/checkbox';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputData } from '../../shared/InputData/InputData';

import '../../../styles/dom-card.css'



export const ContactoCard = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      phone: undefined,
      correo: '', puesto: '',
      birthday: undefined,
      operador: false
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;
  const reset = () => {
    handleReset()

  }
  return (
    <FormCardTemplate titulo='Contacto'>
      <form onSubmit={handleSubmit} className='flex flex-column gap-4' id='Contacto'>
        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="inputtext"
            label="Nombre Completo"
            placeholder="Nombre Completo"
            name='nombre'
            onchange={handleChange}
            value={values.nombre}
          />
          <InputData
            type="phone"
            label="Teléfono"
            placeholder="00-0000-0000"
            name='phone'
            onchange={handleChange}
            value={values.phone}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="email"
            label="Correo Empresarial"
            placeholder="Correo Empresarial"
            name='correo'
            onchange={handleChange}
            value={values.correo}
          />
          <InputData
            type="inputtext"
            label="Puesto"
            placeholder="Puesto"
            name='puesto'
            onchange={handleChange}
            value={values.puesto}
          />

        </div>
        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="calendar"
            label="Cumpleaños"
            placeholder="Cumpleaños"
            name='birthday'
            onchange={handleChange}
            value={values.birthday}
          />
          <div className='tw-w-full flex flex-row gap-3 tw-items-center tw-mt-6'>
            <Checkbox onChange={handleChange} checked={values.operador} name='operador'></Checkbox>
            <label className='tw-font-medium tw-text-sm'>Hacer Operador</label>
          </div>

        </div>

        <div className='flex tw-justify-end tw-w-full gap-4'>
          <button type='reset'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={reset}>
            Cancelar
          </button>
          <button type="submit"
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-border-blue-600 tw-border-2 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-blue-600 hover:tw-bg-blue-100`}>
            Agregar
          </button>
        </div>


      </form>
    </FormCardTemplate>
  )
}
