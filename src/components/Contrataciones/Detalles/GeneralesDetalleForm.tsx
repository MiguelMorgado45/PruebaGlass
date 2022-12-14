import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { contratacionGeneralDetalleState } from '../../../atoms/ContratacionAtom';
import { validacionGeneralDetalleCard } from './validacionContratacionDetalles';
import { ContratacionGeneralType } from '../types';
import { getContratobyId } from '../../../helpers/getContratobyId';

import { CalendarField, DropdownField, InputNumberField, InputCurrencyField, } from '../../shared/inputFields';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';

type PropType = {
  id:string | undefined
}

export const GeneralesDetalleForm = ({id}:PropType) => {

  const atomState: RecoilState<{}> = contratacionGeneralDetalleState;

  const [generalForm, setGeneralForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: ContratacionGeneralType = {
    producto: '',
    contratados: 0,
    alta: '',
    expira: '',
    costo: 0,
    estado: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: ContratacionGeneralType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: validacionGeneralDetalleCard,
  });

  useEffect(() => {
    setGeneralForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  const contratacion = getContratobyId(id);
  const contratacionData = {
    producto: contratacion? contratacion.producto : '',
    contratados: contratacion? contratacion.contratados : 0,
    alta: contratacion? contratacion.alta : '',
    expira: contratacion? contratacion.expira : '',
    costo: contratacion? contratacion.costo : 0,
    estado: contratacion? contratacion.estado : '',
  }

  useEffect(() => {
    formik.setValues(contratacionData)
  }, [])

  return loading === true ? (
    <>
      <CardTemplate name='DATOS'>
        <form onSubmit={generalForm.handleSubmit} className="flex flex-column gap-4" id="Generales">

          <div className="flex flex-row tw--w-full">
            <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">General</p>
          </div>

          <div className="flex flex-row gap-4 tw--w-full">
            <DropdownField
              label="Producto"
              name="producto"
              placeholder='Seleccionar'
              options={["Producto 1", "Producto 2", "Producto 3"]}
              formikState={atomState}
            ></DropdownField>

            <InputNumberField
              label="Contratados"
              placeholder="0"
              name='contratados'
              formikState={atomState}
            />
          </div>

          <div className="flex flex-row gap-4 tw--w-full">
            <CalendarField
              label="Fecha de Alta"
              placeholder="DD/MM/AAAA"
              name='alta'
              formikState={atomState}
            />

            <CalendarField
              label="Fecha de Vencimiento"
              placeholder="DD/MM/AAAA"
              name='expira'
              formikState={atomState}
            />
          </div>

          <div className="flex flex-row gap-4 tw--w-full">
            <InputCurrencyField
              label="Costo"
              placeholder="0"
              name='costo'
              formikState={atomState}
            />

            <DropdownField
              label="Estado"
              name="estado"
              placeholder='Seleccionar'
              options={["Estado 1", "Estado 2", "Estado 3"]}
              formikState={atomState}
            ></DropdownField>
          </div>

          <div className='flex tw-mt-5 tw-justify-end tw-w-full gap-3 tw-text-sm tw-font-semibold'>
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

        </form>
      </CardTemplate>
    </>
  ) : null
}
