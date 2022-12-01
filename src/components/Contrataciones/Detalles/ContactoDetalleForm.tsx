import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { contratacionContactoDetalleState } from '../../../atoms/ContratacionAtom';
import { validacionContactoDetalleCard } from './validacionContratacionDetalles';
import { ContratacionContactoType } from '../types';
import { getContratobyId } from '../../../helpers/getContratobyId';

import { CalendarField, InputTextField, InputMaskField,  } from '../../shared/inputFields';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

type PropType = {
  id: string | undefined
}

export const ContactoDetalleForm = ({ id }: PropType) => {

  const atomState: RecoilState<{}> = contratacionContactoDetalleState;

  const [generalForm, setGeneralForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: ContratacionContactoType = {
    nombreContacto: '',
    telefono: '00-0000-0000',
    correo: '',
    puesto: '',
    cumple: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: ContratacionContactoType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: validacionContactoDetalleCard,
  });

  useEffect(() => {
    setGeneralForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  const contratacion = getContratobyId(id);
  const contratacionData = {
    nombreContacto: contratacion ? contratacion.nombreContacto : '',
    telefono: contratacion ? contratacion.telefono : '',
    correo: contratacion ? contratacion.correo : '',
    puesto: contratacion ? contratacion.puesto : '',
    cumple: contratacion ? contratacion.cumple : '',
  }
  useEffect(() => {
    formik.setValues(contratacionData)
  }, [])

  return loading === true ? (
    <>
      <FormCardTemplate titulo='Contacto'>
        <form onSubmit={generalForm.handleSubmit} className="flex flex-column gap-4" id="Contacto">

          <div className="flex flex-row gap-4 tw--w-full">
            <InputTextField
              label="Nombre Completo"
              placeholder="Ingrese el combre completo"
              name='nombreContacto'
              formikState={atomState}
            />

            <InputMaskField
              label="Telefono"
              placeholder="99-9999-99"
              name='telefono'
              formikState={atomState}
            />
          </div>

          <div className="flex flex-row gap-4 tw--w-full">
            <InputTextField
              label="Correo Empresarial"
              placeholder="persona@empresa.com"
              name='correo'
              formikState={atomState}
            />

            <InputTextField
              label="Puesto"
              placeholder="Ingresar"
              name='puesto'
              formikState={atomState}
            />
          </div>

          <div className="flex flex-row gap-4 tw--w-full">

            <CalendarField
              label="Cumpleaños"
              placeholder="DD/MM/AAAA"
              name='cumple'
              formikState={atomState}
            />


            <div className='flex tw-items-center tw-mt-6 tw-justify-center tw-w-full gap-3 tw-text-sm tw-font-semibold'>
              <button type='button'
                className={`tw-w-36 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
                onClick={() => formik.resetForm({values: contratacionData})}
              >
                Cancelar
              </button>
              <button type="submit"
                className={`tw-w-36 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white tw-bg-blue-600`}
              >
                Agregar
              </button>
            </div>
          </div>


        </form>
      </FormCardTemplate>
    </>
  ) : null
}
