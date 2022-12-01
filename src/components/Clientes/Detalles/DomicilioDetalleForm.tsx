import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { DomicilioClienteFormType } from '../types';
import { useFormik } from 'formik';

import { domicilioDetalleFormAtom } from '../../../atoms/ClienteAtom';
import { validacionDomicilioDetalleForm } from './validacionClienteDetalleForm';
import { getClientebyId } from '../../../helpers/getClientebyId';

import { DropdownField, InputTextField } from '../../shared/inputFields';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

import '../../../styles/dom-card.css'

type PropType = {
  id:string | undefined
}

export const DomicilioDetalleForm = ({id}:PropType) => {

  const atomState: RecoilState<{}> = domicilioDetalleFormAtom;
  const [domicilioForm, setDomicilioForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: DomicilioClienteFormType = {
    calle: '',
    exterior: '',
    interior: '',
    colonia: '',
    alcaldia: '',
    estado: '',
    pais: '',
    codigoPostal: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: DomicilioClienteFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: validacionDomicilioDetalleForm,
  });

  useEffect(() => {
    setDomicilioForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  const cliente = getClientebyId(id);
  const clienteData = {
    calle: cliente? cliente.calle : '',
    exterior: cliente? cliente.exterior : '',
    interior: cliente? cliente.interior : '',
    colonia: cliente? cliente.colonia : '',
    alcaldia: cliente? cliente.alcaldia : '',
    estado: cliente? cliente.estado : '',
    pais: cliente? cliente.pais : '',
    codigoPostal: cliente? cliente.codigoPostal : '',
  }

  useEffect(() => {
    formik.setValues(clienteData)
  }, [])

  return loading === true ? (
    <FormCardTemplate titulo='Domicilio Fiscal'>
      <form onSubmit={domicilioForm.handleSubmit} id={"Domicilio"}>
        <div className='flex flex-column gap-4'>
          <div className='wrapper'>
            <div className='one'>
              <InputTextField
                label="Calle"
                placeholder="Calle"
                name='calle'
                formikState={atomState}
              />
            </div>
            <div className='two'>
              <InputTextField
                label="Exterior"
                placeholder="Exterior"
                name='exterior'
                formikState={atomState}
              />
              <InputTextField
                label="Interior"
                placeholder="Interior"
                name='interior'
                formikState={atomState}
              />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <InputTextField
              label="Colonia"
              placeholder="Colonia"
              name='colonia'
              formikState={atomState}
            />
            <InputTextField
              label="Alcaldía/Municipio"
              placeholder="Alcaldía/Municipio"
              name='alcaldia'
              formikState={atomState}
            />

          </div>

          <div className="flex flex-row gap-4 ">

            <DropdownField
              label="Estado"
              placeholder="Selecciona"
              name='estado'
              options={['CDMX', 'GDL', 'QRO']}
              formikState={atomState}
            />

            <DropdownField
              label="País"
              placeholder="País"
              name='pais'
              options={['México', 'EUA', 'Canada']}
              formikState={atomState}
            />

          </div>

          <div className="flex flex-row gap-4 tw-w-1/2 tw-pr-3">
            <InputTextField
              label="Código Postal"
              placeholder="Código Postal"
              name='codigoPostal'
              formikState={atomState}
            />
          </div>
          <div className='tw-w-full flex tw-justify-center gap-4'>

            <button type='button' onClick={() => { formik.resetForm({ values: clienteData }) }}
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
                        tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
              Cancelar
            </button>

            <button type="submit"
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit
                        tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
              Guardar
            </button>

          </div>
        </div>
      </form>
    </FormCardTemplate>
  ) : null
}
