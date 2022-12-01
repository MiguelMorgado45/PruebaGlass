import { useFormik } from 'formik';
import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import { propDetalleType, VendedorCuentaFormType, } from '../types';
import { vendedorDetalleFormState } from '../../../atoms/CuentasAtoms';
import { getCuentabyId } from '../../../helpers/getCuentabyId';
import { validacionVendedorDetalle } from './validacionCuentaDetalle';

import { InputTextField, DropdownField,  } from '../../shared/inputFields';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';


export const VendedorDetalleForm = ({ id }: propDetalleType) => {

  const atomState: RecoilState<{}> = vendedorDetalleFormState;
  const [vendedorForm, setVendedorForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: VendedorCuentaFormType = {
    vendedor: 'vendedor B',
    comentario: 'Hola',
  }

  const values = getCuentabyId(id)
  const cuentaData = {
    "vendedor": `${values ? values.vendedor : ''}`,
    "comentario": `${values ? values.comentario : ''}`,
  }

  useEffect(() => {
    formik.setValues(cuentaData)
  }, [])

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: VendedorCuentaFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionVendedorDetalle,
  });

  useEffect(() => {
    setVendedorForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  return loading === true ? (

    <FormCardTemplate titulo="Vendedor">
      <form onSubmit={vendedorForm.handleSubmit} className="flex flex-column gap-4" id="Vendedor">

        <div className="flex flex-row gap-4 tw--w-full">
          <DropdownField
            label='Vendedor'
            placeholder="Seleccionar"
            name='vendedor'
            options={["vendedor A", "vendedor B", "vendedor C"]}
            formikState={atomState}
          />
          <InputTextField
            label='Comentarios'
            placeholder="Escribir"
            name='comentario'
            formikState={atomState}
          />

        </div>

        <div className='flex tw-justify-end tw-w-full gap-4 tw-text-sm tw-font-semibold'>
          <button type='button'
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
            onClick={() => formik.resetForm({ values: cuentaData })}
          >
            Cancelar
          </button>
          <button type="submit"
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white tw-bg-blue-600`}
          >
            Guardar
          </button>
        </div>
      </form>
    </FormCardTemplate>

  ) : null
}
