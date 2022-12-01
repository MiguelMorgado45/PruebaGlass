import { RecoilState, useRecoilValue } from 'recoil';
import { Checkbox } from 'primereact/checkbox';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { contratacionAgregaFormState } from '../../../atoms/ContratacionAtom';

import { cardProps } from './cardProps';
import { CalendarField, InputMaskField, InputTextField } from '../../shared/inputFields';
import '../../../styles/dom-card.css'

export const ContactoCard = ({setStep} : cardProps) => {

  const atomState: RecoilState<{}> = contratacionAgregaFormState;
  
  const formik: any = useRecoilValue(atomState);

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
        <div className="flex flex-row gap-4 tw-w-full">
          <CalendarField
            label="Cumpleaños"
            placeholder="Cumpleaños"
            name='cumple'
            formikState={atomState}
          />
          <div className='tw-w-full flex flex-row gap-3 tw-items-center tw-mt-6'>
            <Checkbox  name='mismo' checked={formik.values['mismo']} onChange={formik.handleChange}></Checkbox>
            <label className='tw-font-medium tw-text-sm'>Mismo contacto de Cliente</label>
          </div>

        </div>

        <div className='flex tw-justify-end tw-w-full gap-4'>
          <button type='button'
            className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={() => setStep(1)}>
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