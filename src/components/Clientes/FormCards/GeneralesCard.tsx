import { RecoilState } from 'recoil';
import { clienteAgregaFormState } from '../../../atoms/ClienteAtom';
import { DropdownField, InputTextField } from '../../shared/inputFields';

export const GeneralesCard = () => {

  const atomState:RecoilState<{}> = clienteAgregaFormState;


  return (
    <>
      <div className="flex flex-column gap-4 tw-items-end" id='Generales'>
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
            label="Regimen Fiscal"
            placeholder="Selecciona"
            name='regimenFiscal'
            options={['Opción 1', '601 - General de Ley Personas Morales', '602 - General de Ley Personas Morales']}
            formikState={atomState}
          />

        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <DropdownField
            label="Giro"
            placeholder="Selecciona"
            name='giro'
            options={['GIRO 1', 'GIRO 2', 'GIRO 3']}
            formikState={atomState}
          />
          <InputTextField
            label="Registro Patronal"
            placeholder="Escribe tu Registro Patronal"
            name='registroPatronal'
            formikState={atomState}
          />

        </div>
      </div>
    </>
  )
}
