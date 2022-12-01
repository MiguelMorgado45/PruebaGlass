import { RecoilState } from 'recoil';

import { clienteAgregaFormState } from '../../../atoms/ClienteAtom';
import { cardProps } from './cardProps';

import { CalendarField, InputMaskField, InputTextField } from '../../shared/inputFields';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import '../../../styles/dom-card.css'


export const ContactoCard = ({setStep} : cardProps) => {

  const atomState: RecoilState<{}> = clienteAgregaFormState;
  
  return (
    <FormCardTemplate titulo='Contacto'>
      <div  className='flex flex-column gap-4' id='Contacto'>
        <div className="flex flex-row gap-4 tw-w-full">
        <InputTextField
            label="Nombre Completo"
            placeholder="Nombre Completo"
            name='nombreContacto'
            formikState={atomState}
          />
          <InputMaskField
            label="Teléfono"
            placeholder="00-0000-0000"
            name='telefono'
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
        <InputTextField
            label="Correo Empresarial"
            placeholder="Correo Empresarial"
            name='correo'
            formikState={atomState}
          />
          <InputTextField
            label="Puesto"
            placeholder="Puesto"
            name='puesto'
            formikState={atomState}
          />

        </div>
        <div className="flex flex-row gap-4 tw-w-1/2 tw-pr-3">
          <CalendarField
            label="Cumpleaños"
            placeholder="Cumpleaños"
            name='cumpleanos'
            formikState={atomState}
          />
        </div>

        <div className='flex tw-justify-end tw-w-full gap-4'>
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={() => setStep(2)}>
            Anterior
          </button>
          <button type="submit"
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit
            tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
            Agregar
          </button>
        </div>


      </div>
    </FormCardTemplate>
  )
}
