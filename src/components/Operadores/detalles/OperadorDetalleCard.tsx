import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { useFormik } from 'formik';

import { operadorDetalleFormState } from '../../../atoms/OperadorAtom';
import { OperadoresFormType } from '../types';
import { validacionOperadorDetallesCard } from './validacionOperadoresDetalleForm';
import { getOperadorbyId } from '../../../helpers/getOperadorbyId';

import { DropdownField, InputMaskField, CalendarField, InputTextField } from '../../shared/inputFields';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';

type propType = {
  id: string | undefined
}

export const OperadorDetalleCard = ({ id }: propType) => {

  const atomState: RecoilState<{}> = operadorDetalleFormState;

  const [operadorForm, setOperadorForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<OperadoresFormType>({
    nombre: '',
    correo: '',
    telefono: '00-0000-0000',
    area: '',
    alta: '',
  })

  const valorInicial: OperadoresFormType = {
    nombre: '',
    correo: '',
    telefono: '00-0000-0000',
    area: '',
    alta: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));;
    },
    validate: validacionOperadorDetallesCard
  });

  useEffect(() => {
    setOperadorForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])

  useEffect(() => {
    const values = getOperadorbyId(id)
    formik.setValues({
      nombre: values ? values.nombre : '',
      correo: values ? values.usuario : '',
      telefono: values ? values.telefono : '',
      area: values ? values.area : '',
      alta: values ? values.alta : ''
    })

    setInitialValues((anterior) => ({
      ...anterior,
      nombre: values ? values.nombre : '',
      correo: values ? values.usuario : '',
      telefono: values ? values.telefono : '00-0000-0000',
      area: values ? values.area : '',
      alta: values ? values.alta : ''
    }))

  }, [])

  return loading === true ? (
    <>
      <form onSubmit={operadorForm.handleSubmit}>
        <CardTemplate name="DATOS">
          <div className="flex flex-column gap-4" id='Operador'>
            <div className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
              <p className="tw-text-orangetw tw-text-2xl tw-font-semibold w-full">Operador</p>
              <div className="flex flex-row gap-4 tw-w-full ">

                <InputTextField
                  label='Nombre:'
                  placeholder="Nombre del Operador"
                  name='nombre'
                  formikState={atomState}
                />

                <InputTextField
                  label="Correo/Usuario:"
                  placeholder="nombre@dominio.com"
                  name='correo'
                  formikState={atomState}
                />

              </div>

              <div className="flex flex-row gap-4 tw-w-full">

                <InputMaskField
                  label="Teléfono:"
                  placeholder="55-0000-0000"
                  name='telefono'
                  formikState={atomState}
                />

                <DropdownField
                  label="Área:"
                  placeholder="Seleccione Área"
                  name='area'
                  options={["Soporte", "Desarrollo", "Recursos Humanos"]}
                  formikState={atomState}
                />
              </div>

              <div className="flex flex-row gap-4 tw-w-full">

                <CalendarField
                  label="Fecha de Alta:"
                  placeholder="DD/MM/AAAA"
                  name='alta'
                  formikState={atomState}
                />

                <div className='tw-w-full flex tw-justify-center gap-4 tw-mt-4 tw-pt-4'>

                  <button type='button'
                    onClick={() => {
                      operadorForm.resetForm({values:{
                        nombre: initialValues.nombre,
                        correo: initialValues.correo,
                        telefono: initialValues.telefono,
                        area: initialValues.area,
                        alta: initialValues.alta
                      }})
                    }}
                    className={`tw-text-sm tw-w-2/5 tw-font-semibold tw-bg-gray-200 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
                    Cancelar
                  </button>

                  <button type="submit"
                    className={`tw-text-sm tw-w-2/5 tw-font-semibold tw-bg-blue-600 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CardTemplate>
      </form>
    </>
  ) : null
}
