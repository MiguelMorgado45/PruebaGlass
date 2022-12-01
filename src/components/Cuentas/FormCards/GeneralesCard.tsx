import { RecoilState, useRecoilValue } from 'recoil';

import { cuentaAgregaFormState } from '../../../atoms/CuentasAtoms';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { InputTextField, InputTextareaField } from '../../shared/inputFields';

import Plogo from '../../../assets/ProfileLogo.png'



export const GeneralesCard = () => {

  const atomState: RecoilState<{}> = cuentaAgregaFormState;
  const formik: any = useRecoilValue(atomState)
  return (

    <FormCardTemplate titulo='Generales'>
      <div className='flex tw-gap-48 tw-mb-8'>
        <label className="tw-font-semibold">Logotipo</label>
        <div className='flex justify-content-center align-items-center flex-column'>
          <img className='tw-rounded-full tw-mb-4' src={Plogo} alt="Profile Photo" />
          <p className='tw-text-sm tw-font-medium tw-text-gray-grayt tw-mb-2'>JPG o PNG no mayor a 1 MB</p>
        </div>
        <div className='flex tw-items-end'>
          <button type='reset'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-100 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
            Subir
          </button>
        </div>

      </div>
      <InputTextField
        label="Nombre de la Cuenta"
        placeholder="Nombre de la cuenta"
        name='cuenta'
        formikState={atomState}
      />
      <InputTextareaField
        label="Descripción"
        placeholder="Escribe"
        name='descripcion'
        formikState={atomState}
      />

      <div className='flex tw-justify-end tw-w-full gap-4'>
        <button type='button'
          className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick = {() =>{formik.resetForm()}}>
          Cancelar
        </button>
        <button
          className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit
          tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
          Añadir
        </button>
      </div>
    </FormCardTemplate>

  )
}
