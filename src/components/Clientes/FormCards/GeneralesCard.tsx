import { useFormik } from 'formik';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputData } from '../../shared/InputData/InputData';


export const GeneralesCard = () => {
  const formik = useFormik({
    initialValues: { razonS: '', nombreC: '', rfc: '', regimenF: '', giro: '', registroP: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;
  const reset = () => {
    handleReset()

  }
  return (
    <FormCardTemplate titulo='Generales'>
      <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Generales'>
        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="inputtext"
            label="Razón Social"
            placeholder="Razón Social"
            name='razonS'
            onchange={handleChange}
            value={values.razonS}
          />
          <InputData
            type="inputtext"
            label="Nombre Comercial"
            placeholder="Mi empressa"
            name='nombreC'
            onchange={handleChange}
            value={values.nombreC}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="inputtext"
            label="RFC"
            placeholder="Escribe tu RFC"
            name='rfc'
            onchange={handleChange}
            value={values.rfc}
          />
          <InputData
            type="dropdown"
            label="Regimen Fiscal"
            placeholder="Selecciona"
            name='regimenF'
            options={['Opción 1', '601 - General de Ley Personas Morales', '602 - General de Ley Personas Morales']}
            value={values.regimenF}
            onchange={handleChange}

          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type="dropdown"
            label="Giro"
            placeholder="Selecciona"
            name='giro'
            options={['GIRO 1', 'GIRO 2', 'GIRO 3']}
            value={values.giro}
            onchange={handleChange}
          />
          <InputData
            type="inputtext"
            label="Registro Patronal"
            placeholder="Escribe tu Registro Patronal"
            name='registroP'
            onchange={handleChange}
            value={values.registroP}
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
    </FormCardTemplate>
  )
}
