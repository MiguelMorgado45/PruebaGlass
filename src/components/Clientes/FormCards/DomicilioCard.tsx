import '../../../styles/dom-card.css'
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { DropdownField } from '../../shared/inputFields';
import { RecoilState } from 'recoil';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { cardProps } from './cardProps';
import { clienteAgregaFormState } from '../../../atoms/ClienteAtom';

export const DomicilioCard = ({setStep} : cardProps) => {

  const atomState: RecoilState<{}> = clienteAgregaFormState;

  return (
    <FormCardTemplate titulo='Domicilio Fiscal'>
      <div className='flex flex-column gap-4'>
        <div className='wrapper'>
          <div className='one'>
            <InputTextField
              label="Calle"
              placeholder="Calle"
              name='calle'
              formikState={atomState}
            />
          </div>
          <div className='two'>
            <InputTextField
              label="Exterior"
              placeholder="Exterior"
              name='exterior'
              formikState={atomState}
            />
            <InputTextField
              label="Interior"
              placeholder="Interior"
              name='interior'
              formikState={atomState}
            />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <InputTextField
            label="Colonia"
            placeholder="Colonia"
            name='colonia'
            formikState={atomState}
          />
          <InputTextField
            label="Alcaldía/Municipio"
            placeholder="Alcaldía/Municipio"
            name='alcaldia'
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 ">

          <DropdownField
            label="Estado"
            placeholder="Selecciona"
            name='estado'
            options={['CDMX', 'GDL', 'QRO']}
            formikState={atomState}
          />

          <DropdownField
            label="País"
            placeholder="País"
            name='pais'
            options={['México', 'EUA', 'Canada']}
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-1/2 tw-pr-3">
          <InputTextField
            label="Código Postal"
            placeholder="Código Postal"
            name='codigoPostal'
            formikState={atomState}
          />
        </div>


        <div className="flex flex-row gap-4 tw-w-full tw-justify-end">
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={() => setStep(1)}>
            Anterior
          </button>
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-border-blue-600 tw-border-2 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-blue-600 hover:tw-bg-blue-100`} onClick={() => setStep(3)}>
            Siguiente
          </button>
        </div>

      </div>
    </FormCardTemplate>
  )
}
