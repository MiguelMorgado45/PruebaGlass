import { RecoilState, useRecoilValue } from 'recoil';

import { Divider } from 'primereact/divider';
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { InputMaskField } from '../../shared/inputFields/InputMaskField';
import { InputTextareaField } from '../../shared/inputFields/InputTextareaField';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import Plogo from '../../../assets/ProfileLogo.png'
import { operadorAgregaFormState } from '../../../atoms/OperadorAtom';

export const OperadorCard = () => {

  const atomState: RecoilState<{}> = operadorAgregaFormState;
  const formik: any = useRecoilValue(atomState)

  return (
    <>
      <FormCardTemplate titulo='Operador'>
      <div className='flex tw-gap-48 tw-mb-8'>
        <label className="tw-font-semibold">Fotografía</label>
        <div className='flex justify-content-center align-items-center flex-column'>
          <img className='tw-rounded-full tw-mb-4' src={Plogo} alt="Profile Photo" />
          <p className='tw-text-sm tw-font-medium tw-text-gray-grayt tw-mb-2'>JPG o PNG no mayor a 1 MB</p>
        </div>
        <div className='flex tw-items-end'>
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-100 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
            Subir
          </button>
        </div>

      </div>
        <div className="flex flex-row gap-4 tw-w-full ">

          <InputTextField
            label='Nombre:'
            placeholder="Nombre del Operador"
            name='nombre'
            formikState={atomState}
          />

          <CalendarField
            label="Fecha de Alta:"
            placeholder="DD/MM/AAAA"
            name='fechaAlta'
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputTextField
            label="Correo/Usuario:"
            placeholder="nombre@dominio.com"
            name='correo'
            formikState={atomState}
          />

          <InputMaskField
            label="Teléfono"
            placeholder="55-0000-0000"
            name='telefono'
            formikState={atomState}
          />

        </div>

        <InputTextareaField
          label="Descripción:"
          placeholder="Escribe"
          name='descripcion'
          formikState={atomState}
        />
        <Divider/>
        <div className='flex tw-justify-end tw-w-full gap-4'>
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={formik.resetForm}>
            Cancelar
          </button>
          <button type="submit"
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit
            tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
            Agregar
          </button>
        </div>
      </FormCardTemplate>

    </>
  )
}
