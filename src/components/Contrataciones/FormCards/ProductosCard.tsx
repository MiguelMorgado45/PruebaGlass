import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';
import { DropdownField } from '../../shared/inputFields/DropdownField';
import { RecoilState, useRecoilValue } from 'recoil';
import { InputNumberField } from '../../shared/inputFields/InputNumberFiled';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { contratacionesCardFormState } from '../../../atoms/FormAtoms';


export const ProductosCard = () => {

  const atomState:RecoilState<{}> = contratacionesCardFormState;

  const formik = useRecoilValue(contratacionesCardFormState);

  return (
    <CardTemplate name="DATOS" >
      <div className="flex flex-column gap-4 tw-items-end" id='Productos'>
        <p className="tw-text-orangetw tw-text-2xl tw-font-semibold tw-w-full">Cuenta</p>

        <div className="flex flex-row gap-4 tw-w-full">
          <DropdownField
            label='Producto:'
            placeholder="Seleccionar"
            name='producto'
            options={['Cloud', 'Retail', 'Nomina', 'Staff']}
            formikState={atomState}

          />
          <InputNumberField
            label='Contratados:'
            placeholder="0"
            name='contratados'
            formikState={atomState}
          // value={values.contratados}
          // onchange={(e: any) => setFieldValue('contratados', e.value)}
          />
        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <CalendarField
            label='Alta:'
            placeholder="DD/MM/AAAA"
            name='alta'
            formikState={atomState}

          />
          <CalendarField
            label='Vencimiento:'
            placeholder="DD/MM/AAAA"
            name='vencimiento'
            formikState={atomState}

          />
        </div>

        <div className="flex flex-row gap-4 tw-w-full">
          <InputNumberField
            label='Costo:'
            placeholder="0"
            name='costo'
            formikState={atomState}
          // value={values.costo}
          // onchange={(e: any) => setFieldValue('costo', e.value)}
          />
          <DropdownField
            label='Estado:'
            placeholder="Seleccionar"
            name='estado'
            options={['Activo', 'Inactivo', 'Demo']}
            formikState={atomState}

          />
        </div>

        
      </div>

    </CardTemplate>
  )
}
