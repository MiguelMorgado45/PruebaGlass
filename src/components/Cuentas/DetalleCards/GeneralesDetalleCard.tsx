import { useFormik } from 'formik';
import { GeneralType, propDetalleType } from '../../Cuentas/types';
import { RecoilState, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { InputTextareaField } from '../../shared/inputFields/InputTextareaField';
import { generalDetalleFormState } from '../../../atoms/cuentasAtoms';
import { getCuentabyId } from '../../../helpers/getCuentabyId';
import { validacionGeneralDetalle } from './validacionCuentaDetalle';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

export const GeneralesDetalleCard = ({ id }: propDetalleType) => {

  const atomState: RecoilState<{}> = generalDetalleFormState;

  const [generalForm, setGeneralForm] = useRecoilState<any>(atomState)

  const [loading, setLoading] = useState(false);

  let valorInicial: GeneralType = {
    name: '',
    alta: "",
    descripcion: '',
  }
  

  useEffect(() => {
    const values = getCuentabyId(id)
    formik.setValues ({
      "name" : `${values? values.name : ''}`,
      "alta" : `${values? values.alta : undefined}`,
      "descripcion" : `${values? values.descripcion : ''}`
    })   
  }, [])

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: GeneralType) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: validacionGeneralDetalle,
  });

  useEffect(() => {
    setGeneralForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])


  return loading === true? (

    <>
      <form onSubmit={generalForm.handleSubmit} className="flex flex-column gap-4" id="Generales">

        <div className="flex flex-row tw--w-full">
          <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Generales</p>
        </div>

        <div className="flex flex-row gap-4 tw--w-full">
          <InputTextField
            label='Nombre de la cuenta'
            placeholder="Nombre de la cuenta"
            name='name'
            formikState={atomState}
          />
          <CalendarField
            label="Fecha de Alta:"
            placeholder="DD/MM/AAAA"
            name='alta'
            formikState={atomState}
          />
        </div>
        <InputTextareaField
          label="Descripción"
          placeholder="Ingresar"
          name='descripcion'
          formikState={atomState}
        />

        <div className='flex tw-justify-end tw-w-full gap-4 tw-text-sm tw-font-semibold'>
          <button type='reset'
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
            onClick={() => formik.resetForm()}
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
    </>

  ) : null
}
