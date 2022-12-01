import { RecoilState } from 'recoil';

import { contratacionAgregaFormState } from '../../../atoms/ContratacionAtom';
import { clientes } from '../../../data/dataClientes';
import { cardProps } from './cardProps';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { DropdownField, InputTextareaField } from '../../shared/inputFields';


export const ClienteCard = ({ setStep }: cardProps) => {
  const  nameClientes = clientes.map((cliente:any) => (cliente.name))

  const atomState: RecoilState<{}> = contratacionAgregaFormState;

  return (
    <FormCardTemplate titulo='Cuenta'>

      <div className="flex flex-column gap-4">
        <div className="flex flex-column gap-4 tw-items-end">
          <div className="flex flex-row gap-4 tw-w-full">
            <DropdownField
              label="Cliente"
              placeholder="Selecciona"
              name='cliente'
              options={nameClientes}
              formikState={atomState}
            />
            <InputTextareaField
              label="Descripción"
              placeholder="Escribe"
              name='descr'
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

