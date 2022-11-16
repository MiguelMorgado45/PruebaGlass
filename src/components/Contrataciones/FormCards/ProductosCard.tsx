import { useState, useEffect } from 'react'

import { useFormik } from 'formik';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputData } from '../../shared/InputData/InputData';


export const ProductosCard = () => {


  const formik = useFormik({
    initialValues: { producto: '', contratados: 0, alta: null, expira: null, costo: '', estado: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;
  const reset = () => {
    handleReset();

  }

  return (
    <FormCardTemplate titulo='Productos'>
      <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Productos'>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type='dropdown'
            label='Producto:'
            placeholder="Seleccionar"
            name='producto'
            options={['Cloud', 'Retail', 'Nomina', 'Staff']}
            value={values.producto}
            onchange={handleChange}
          />
          <InputData
            type='number'
            label='Contratados:'
            placeholder="0"
            name='contratados'
            value={values.contratados}
            onchange={(e: any) => setFieldValue('contratados', e.value)}
          />
        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputData
            type='calendar'
            label='Alta:'
            placeholder="DD/MM/AAAA"
            name='alta'
            value={values.alta}
            onchange={handleChange}
          />
          <InputData
            type='calendar'
            label='Vencimiento:'
            placeholder="DD/MM/AAAA"
            name='expira'
            value={values.expira}
            onchange={handleChange}
          />
        </div>

        <div className="flex flex-row gap-4 tw-w-full">
        <InputData
            type='number'
            label='Costo:'
            placeholder="0"
            name='costo'
            value={values.costo}
            onchange={(e: any) => setFieldValue('costo', e.value)}
          />
          <InputData
            type='dropdown'
            label='Estado:'
            placeholder="Seleccionar"
            name='estado'
            options={['Activo', 'Inactivo', 'Demo']}
            value={values.estado}
            onchange={handleChange}
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
