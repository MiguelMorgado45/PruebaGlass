import '../../../styles/dom-card.css'
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { DropdownField } from '../../shared/inputFields';
import { RecoilState, useRecoilState } from 'recoil';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { useEffect, useState } from 'react';
import { domicilioDetalleFormAtom } from '../../../atoms/ClienteAtom';
import { DomicilioDetalleFormType } from '../types';
import { useFormik } from 'formik';
import { validacionDomicilioDetalleForm } from './validacionClienteDetalleForm';
import { getClienteDomicilioDetallebyId } from '../../../helpers/getClientebyId';

type PropType = {
  id:string | undefined
}

export const DomicilioDetalleCard = ({id}:PropType) => {

  const atomState: RecoilState<{}> = domicilioDetalleFormAtom;
  const [domicilioForm, setDomicilioForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: DomicilioDetalleFormType = {
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
    onSubmit: (values: DomicilioDetalleFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionDomicilioDetalleForm,
  });

  useEffect(() => {
    setDomicilioForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  useEffect(() => {
    const cliente = getClienteDomicilioDetallebyId(id);
    formik.setValues({
      calle: cliente? cliente.calle : '',
      exterior: cliente? cliente.exterior : '',
      interior: cliente? cliente.interior : '',
      colonia: cliente? cliente.colonia : '',
      alcaldia: cliente? cliente.alcaldia : '',
      estado: cliente? cliente.estado : '',
      pais: cliente? cliente.pais : '',
      codigoPostal: cliente? cliente.codigoPostal : '',
    })
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

            <button type='reset' onClick={() => { domicilioForm.resetForm() }}
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
