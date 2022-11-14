import { useFormik } from 'formik';

import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';
import { InputData } from '../../shared/InputData/InputData';

export const OperadorCard = () => {

  const formik = useFormik({
    initialValues: { name: '', fechaAlta: '', phone: undefined, correo: '', descr: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, values } = formik;
  const reset = () => {
    handleReset()

  }

  return (
    <CardTemplate name="DATOS" >
      <div className="flex flex-column gap-4" id='Operador'>
        <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Operador Glass</p>

        <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
          <div className="flex flex-row gap-4 tw-w-full">
            <InputData
              type='inputtext'
              label='Nombre:'
              placeholder="Nombre del Operador"
              name='name'
              value={values.name}
              onchange={handleChange}
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

          <div className="flex flex-row gap-4 tw-w-full">
            <InputData
              type="email"
              label="Correo/Usuario:"
              placeholder="nombre@dominio.com"
              name='correo'
              onchange={handleChange}
              value={values.correo}
            />
            <InputData
              type="phone"
              label="Teléfono"
              placeholder="55-0000-0000"
              name='phone'
              onchange={handleChange}
              value={values.phone}
            />
          </div>

          <InputData
              type="textarea"
              label="Descripción:"
              placeholder="Escribe"
              name='descr'
              onchange={handleChange}
              value={values.descr}
            />

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


      </div>

    </CardTemplate>
  )
}
