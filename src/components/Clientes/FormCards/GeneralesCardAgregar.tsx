
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

import { RecoilState } from 'recoil';
import { clienteCardFormState } from '../../../atoms/FormAtoms';

import { DropdownField, InputTextField } from '../../shared/inputFields';
import { cardProps } from './cardProps';

export const GeneralesCardAgregar = ({setStep}: cardProps) => {
  const atomState: RecoilState<{}> = clienteCardFormState;
  return (
    <FormCardTemplate titulo='Generales'>
      <div className='flex tw-justify-end tw-w-full gap-4 flex-column'>
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
            label="Giro"
            placeholder="Selecciona"
            name='giro'
            options={['GIRO 1', 'GIRO 2', 'GIRO 3']}
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-1/2 tw-pr-3">
          
          <DropdownField
            label="Regimen Fiscal"
            placeholder="Selecciona"
            name='regimenFiscal'
            options={['Opción 1', '601 - General de Ley Personas Morales', '602 - General de Ley Personas Morales']}
            formikState={atomState}
          />

        </div>
        <div className="flex flex-row gap-4 tw-w-full tw-justify-end">
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={() => setStep(0)}>
            Anterior
          </button>
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-border-blue-600 tw-border-2 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-blue-600 hover:tw-bg-blue-100`} onClick={() => setStep(2)}>
            Siguiente
          </button>
        </div>

      </div>
    </FormCardTemplate>
  )
}
