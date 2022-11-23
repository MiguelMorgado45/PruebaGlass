import { RecoilState, useRecoilValue } from 'recoil';
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { InputMaskField } from '../../shared/inputFields/InputMaskField';
import { DropdownField } from '../../shared/inputFields';
import { operadorDetalleFormState } from '../../../atoms/OperadorAtom';

type propType = {
  id : string
}

export const OperadorDetalleCard = () => {

  const atomState: RecoilState<{}> = operadorDetalleFormState;
  const formikOperadorDetalle = useRecoilValue<any>(operadorDetalleFormState);

  return (
    <>
      <div className="flex flex-column gap-4" id='Operador'>
        <div className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
          <p className="tw-text-orangetw tw-text-2xl tw-font-semibold w-full">Operador</p>
          <div className="flex flex-row gap-4 tw-w-full ">

            <InputTextField
              label='Nombre:'
              placeholder="Nombre del Operador"
              name='nombre'
              formikState={atomState}
            />

            <InputTextField
              label="Correo/Usuario:"
              placeholder="nombre@dominio.com"
              name='correo'
              formikState={atomState}
            />

          </div>

          <div className="flex flex-row gap-4 tw-w-full">

            <InputMaskField
              label="Teléfono:"
              placeholder="55-0000-0000"
              name='telefono'
              formikState={atomState}
            />

            <DropdownField
              label="Área:"
              placeholder="Seleccione Área"
              name='area'
              options={["Soporte", "Desarrollo", "Recursos Humanos"]}
              formikState={atomState}
            />
          </div>

          <div className="flex flex-row gap-4 tw-w-full">

            <CalendarField
              label="Fecha de Alta:"
              placeholder="DD/MM/AAAA"
              name='alta'
              formikState={atomState}
            />

            <div className='tw-w-full flex tw-justify-center gap-4 tw-mt-4 tw-pt-4'>

              <button type='reset' onClick={()=> {formikOperadorDetalle.resetForm()}}
                className={`tw-text-sm tw-w-2/5 tw-font-semibold tw-bg-gray-200 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
                Cancelar
              </button>

              <button type="submit"
                className={`tw-text-sm tw-w-2/5 tw-font-semibold tw-bg-blue-600 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
