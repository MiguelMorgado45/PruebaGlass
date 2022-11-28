import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { generalesDetalleFormAtom } from '../../../atoms/ClienteAtom';
import { DropdownField, InputTextField } from '../../shared/inputFields';
import { GeneralDetalleFormType } from '../types';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';
import { validacionGeneralDetalleForm } from './validacionClienteDetalleForm';
import { getClienteGeneralDetallebyId } from '../../../helpers/getClientebyId';

type PropType = {
  id:string | undefined
}

export const GeneralesDetalleCard = ({id}:PropType) => {

  const atomState: RecoilState<{}> = generalesDetalleFormAtom;
  const [generalForm, setGeneralForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: GeneralDetalleFormType = {
    razonSocial: '',
    nombreComercial: '',
    rfc: '',
    regimenFiscal: '',
    giro: '',
    registroPatronal: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: GeneralDetalleFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionGeneralDetalleForm,
  });

  useEffect(() => {
    setGeneralForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  useEffect(() => {
    const cliente = getClienteGeneralDetallebyId(id);
    formik.setValues({
      razonSocial: cliente? cliente.razonSocial : '',
      nombreComercial: cliente? cliente.nombreComercial : '',
      rfc: cliente? cliente.rfc : '',
      regimenFiscal: cliente? cliente.regimenFiscal : '',
      giro: cliente? cliente.giro : '',
      registroPatronal: cliente? cliente.registroPatronal : '',
    })
  }, [])

  return loading === true ? (
    <CardTemplate name = "DATOS">
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
          <InputTextField
            label="Registro Patronal"
            placeholder="Escribe tu Registro Patronal"
            name='registroPatronal'
            formikState={atomState}
          />
        </div>

        <div className='tw-w-full flex tw-justify-center gap-4'>
          <button type='reset' onClick={()=> {generalForm.resetForm()}}
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