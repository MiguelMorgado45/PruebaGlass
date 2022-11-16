import { Formik, useFormik } from 'formik';


import { cuentas } from '../../../data/data';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';
import { InputData } from '../../shared/InputData/InputData';

export const CuentaCard = () => {

  const nameCuentas = cuentas.map((cuenta) => (cuenta.name))
  const formik = useFormik({
    initialValues: { cuenta: '', contratado: 0, fechaAlta: '', vencimiento: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;
  const reset = () => {
    handleReset()

  }

  return (
    <CardTemplate name="DATOS" >
      <div className="flex flex-column gap-4" id='Cuenta'>
        <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Cuentas</p>

        <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
          <div className="flex flex-row gap-4 tw-w-full">
            <InputData
              type='dropdown'
              label='Cuenta:'
              placeholder="Selecciona"
              name='cuenta'
              options={nameCuentas}
              value={values.cuenta}
              onchange={handleChange}
            />
            <InputData
              type="number"
              label="Contratados:"
              placeholder="00"
              name='contratado'
              onchange={(event: any) => {
                setFieldValue('contratado', event.value)
              }}
              value={values.contratado}
            />
          </div>

          <div className="flex flex-row gap-4 tw-w-full">
            <InputData
              type="calendar"
              label="Fecha de Alta:"
              placeholder="DD/MM/AAAA"
              name='fechaAlta'
              onchange={handleChange}
              value={values.fechaAlta}
            />
            <InputData
              type="calendar"
              label="Vencimiento:"
              placeholder="DD/MM/AAAA"
              name='vencimiento'
              onchange={handleChange}
              value={values.vencimiento}
            />
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


      </div>

    </CardTemplate>
  )
}
