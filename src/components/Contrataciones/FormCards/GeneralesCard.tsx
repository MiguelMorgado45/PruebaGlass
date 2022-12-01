import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

import { RecoilState } from 'recoil';
import { CalendarField, DropdownField, InputNumberField, InputTextField } from '../../shared/inputFields';
import { cardProps } from './cardProps';
import { MultiSelectField } from '../../shared/inputFields/MultiSelectField';
import { contratacionAgregaFormState } from '../../../atoms/ContratacionAtom';

export const GeneralesCard = ({ setStep }: cardProps) => {
  const atomState: RecoilState<{}> = contratacionAgregaFormState;
  return (
    <FormCardTemplate titulo='Generales'>
      <div className='flex tw-justify-end tw-w-full gap-4 flex-column'>
        <div className="flex flex-row gap-4 tw-w-full">
          <MultiSelectField
            label="Producto"
            placeholder="Selecciona"
            name='producto'
            options={['Cloud', 'Staff', 'Pyme']}
            formikState={atomState}
          />
          <InputNumberField
            label="Contratados"
            placeholder="0"
            name='contratados'
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <CalendarField
            label="Alta"
            placeholder="dd/mm/aaaa"
            name='alta'
            formikState={atomState}
          />
          <CalendarField
            label="Vencimiento"
            placeholder="dd/mm/aaaa"
            name='expira'
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 ">

          <InputNumberField
            label="Costo"
            placeholder="$00.00"
            name='costo'
            formikState={atomState}
          />

          <DropdownField
            label="Estado"
            placeholder="Selecciona"
            name='estado'
            options={['Activo', 'Demo']}
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