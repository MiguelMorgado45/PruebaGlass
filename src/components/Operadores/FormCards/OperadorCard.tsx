import { RecoilState } from 'recoil';

import { InputTextField } from '../../shared/inputFields/InputTextField';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { InputMaskField } from '../../shared/inputFields/InputMaskField';
import { InputTextareaField } from '../../shared/inputFields/InputTextareaField';
import { operadorCardFormState } from '../../../atoms/FormAtoms';

export const OperadorCard = () => {

  const atomState:RecoilState<{}> = operadorCardFormState;

  return (
    <>
      <div className="flex flex-column gap-4" id='Operador'>
        <div className="flex flex-column gap-4 tw-items-end tw-mb-8 " id='Cuenta'>
          <p className="tw-text-orangetw tw-text-2xl tw-font-semibold w-full">Operador</p>
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

        </div>
      </div>
    </>
  )
}
