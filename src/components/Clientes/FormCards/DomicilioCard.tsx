import { InputData } from '../../shared/InputData/InputData';
import '../../../styles/dom-card.css'
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { DropdownField } from '../../shared/inputFields';
import { RecoilState } from 'recoil';
import { clienteCardFormState } from '../../../atoms/FormAtoms';

export const DomicilioCard = () => {

  const atomState:RecoilState<{}> = clienteCardFormState;

  return (
    <>
      <div className='flex flex-column gap-4' id='Domicilio'>
        <div className="flex flex-row gap-4 tw--w-full">
          <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Contacto</p>
        </div>
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

        <InputTextField
          label="Código Postal"
          placeholder="Código Postal"
          name='codigoPostal'
          formikState={atomState}
        />

      </div>
    </>
  )
}
