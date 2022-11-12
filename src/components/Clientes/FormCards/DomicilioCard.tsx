import { Formik, useFormik } from 'formik';

import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputData } from '../../shared/InputData/InputData';

import '../../../styles/dom-card.css'
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';


export const DomicilioCard = () => {
  const formik = useFormik({
    initialValues: { calle: '', exterior: '', interior: '', colonia: '', municipio: '', estado: null, pais: null, cp: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;
  const reset = () => {
    handleReset()

  }
  return (
    <FormCardTemplate titulo='Domicilio Fiscal'>
      <form onSubmit={handleSubmit} className='flex flex-column gap-4' id='Domicilio'>
        <div className='wrapper'>
          <div className='one'>
            <InputData
              type="inputtext"
              label="Calle"
              placeholder="Calle"
              name='calle'
              onchange={handleChange}
              value={values.calle}
            />
          </div>
          <div className='two'>
            <InputData
              type="inputtext"
              label="Exterior"
              placeholder="Exterior"
              name='exterior'
              onchange={handleChange}
              value={values.exterior}
            />
            <InputData
              type="inputtext"
              label="Interior"
              placeholder="Interior"
              name='interior'
              onchange={handleChange}
              value={values.interior}
            />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <InputData
            type="inputtext"
            label="Colonia"
            placeholder="Colonia"
            name='colonia'
            onchange={handleChange}
            value={values.colonia}
          />
          <InputData
            type="inputtext"
            label="Alcaldía/Municipio"
            placeholder="Alcaldía/Municipio"
            name='municipio'
            onchange={handleChange}
            value={values.municipio}
          />

        </div>

        <div className="flex flex-row gap-4 ">

          <InputData
            type="dropdown"
            label="Estado"
            placeholder="Selecciona"
            name='estado'
            options={['CDMX', 'GDL', 'QRO']}
            onchange={handleChange}
            value={values.estado}

          />
          <InputData
            type="dropdown"
            label="País"
            placeholder="País"
            name='pais'
            options={['México', 'EUA', 'Canada']}
            onchange={handleChange}
            value={values.pais}
          />

        </div>

        <InputData
          type="inputtext"
          label="Código Postal"
          placeholder="Código Postal"
          name='cp'
          onchange={handleChange}
          value={values.cp}
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
    </FormCardTemplate>
  )
}
