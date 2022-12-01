import { useFormik } from 'formik';
import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import { generalesDetalleFormAtom } from '../../../atoms/ClienteAtom';
import { validacionGeneralDetalleForm } from './validacionClienteDetalleForm';
import { getClientebyId } from '../../../helpers/getClientebyId';
import { FiscalClienteFormType } from '../types'

import { DropdownField, InputTextField } from '../../shared/inputFields';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';


type PropType = {
  id: string | undefined
}

export const GeneralesDetalleForm = ({ id }: PropType) => {

  const atomState: RecoilState<{}> = generalesDetalleFormAtom;
  const [generalForm, setGeneralForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: FiscalClienteFormType = {
    razonSocial: '',
    nombreComercial: '',
    rfc: '',
    regimenFiscal: '',
    giro: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: FiscalClienteFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionGeneralDetalleForm,
  });

  useEffect(() => {
    setGeneralForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  const cliente = getClientebyId(id);
  const clientesData = {
    razonSocial: cliente ? cliente.razonSocial : '',
    nombreComercial: cliente ? cliente.nombreComercial : '',
    rfc: cliente ? cliente.rfc : '',
    regimenFiscal: cliente ? cliente.regimenFiscal : '',
    giro: cliente ? cliente.giro : '',
  }
  useEffect(() => {
    formik.setValues(clientesData)
  }, [])

  return loading === true ? (
    <CardTemplate name="DATOS">
      <form onSubmit={generalForm.handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Generales'>
        <p className="tw-w-full tw-text-orangetw tw-text-2xl tw-font-semibold">General</p>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputTextField
            label="Razón Social"
            placeholder="Razón Social"
            name='razonSocial'
            formikState={atomState}
          />
          <InputTextField
            label="Nombre Comercial"
            placeholder="Mi empressa"
            name='nombreComercial'
            formikState={atomState}
          />
        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputTextField
            label="RFC"
            placeholder="Escribe tu RFC"
            name='rfc'
            formikState={atomState}
          />
          <DropdownField
            label="Regimen Fiscal"
            placeholder="Selecciona"
            name='regimenFiscal'
            options={['Opción 1', '601 - General de Ley Personas Morales', '602 - General de Ley Personas Morales']}
            formikState={atomState}
          />
        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <DropdownField
            label="Giro"
            placeholder="Selecciona"
            name='giro'
            options={['GIRO 1', 'GIRO 2', 'GIRO 3']}
            formikState={atomState}
          />
        </div>

        <div className='tw-w-full flex tw-justify-center gap-4'>
          <button type='button' onClick={() => { formik.resetForm({ values: clientesData }) }}
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

      </form>
    </CardTemplate>
  ) : null
}
