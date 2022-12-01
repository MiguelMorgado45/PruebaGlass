import { RecoilState } from 'recoil';

import { clienteAgregaFormState } from '../../../atoms/ClienteAtom';
import { cuentas } from '../../../data/data';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { DropdownField, InputTextareaField } from '../../shared/inputFields';
import { cardProps } from './cardProps';

import Plogo from '../../../assets/ProfileLogo.png'

export const CuentaCard = ({ setStep }: cardProps) => {
  const nameCuentas = cuentas.map((cuenta) => (cuenta.name))

  const atomState: RecoilState<{}> = clienteAgregaFormState;

  return (
    <FormCardTemplate titulo='Cuenta'>
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

      <div className="flex flex-column gap-4">
        <div className="flex flex-column gap-4 tw-items-end">
          <div className="flex flex-row gap-4 tw-w-full">
            <DropdownField
              label="Cuenta"
              placeholder="Selecciona"
              name='cuenta'
              options={(nameCuentas != undefined) ? nameCuentas : []}
              formikState={atomState}
            />
            <InputTextareaField
              label="Descripción"
              placeholder="Escribe"
              name='descripcion'
              formikState={atomState}
            />
          </div>

          <div className='flex tw-justify-end tw-w-full gap-4'>
            <button type='button'
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-border-blue-600 tw-border-2 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-blue-600 hover:tw-bg-blue-100`} onClick={() => setStep(1)}>
              Siguiente
            </button>
          </div>
        </div>


      </div>

    </FormCardTemplate>
  )
}
