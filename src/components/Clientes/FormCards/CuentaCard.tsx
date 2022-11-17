import { Formik, useFormik } from 'formik';


import { cuentas } from '../../../data/data';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';
import { InputTextField } from '../../shared/inputFields/InputTextField';
import { CalendarField } from '../../shared/inputFields/CalendarField';
import { InputNumberField } from '../../shared/inputFields/InputNumberFiled';
import { DropdownField } from '../../shared/inputFields/DropdownField';
import { RecoilState } from 'recoil';
import { cuentaCardFormState } from '../../../atoms/FormAtoms';

export const CuentaCard = () => {

  const atomState:RecoilState<{}> = cuentaCardFormState;

  const nameCuentas = cuentas.map((cuenta) => (cuenta.name))
  const formik = useFormik({
    initialValues: { cuenta: '', contratado: 0, fechaAlta: '', vencimiento: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;


  return (
    <CardTemplate name="DATOS" >
      <div className="flex flex-column gap-4" id='Cuenta'>
        <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Cuentas</p>

        <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
          <div className="flex flex-row gap-4 tw-w-full">
            <DropdownField
              label='Cuenta:'
              placeholder="Selecciona"
              name='cuenta'
              options={nameCuentas}
              formikState={atomState}

            />
            <InputNumberField
              label="Contratados:"
              placeholder="00"
              name='contratado'
              formikState={atomState}
            />
          </div>

          <div className="flex flex-row gap-4 tw-w-full">
            <CalendarField
              label="Fecha de Alta:"
              placeholder="DD/MM/AAAA"
              name='fechaAlta'
              formikState={atomState}
            />
            <CalendarField
              label="Vencimiento:"
              placeholder="DD/MM/AAAA"
              name='vencimiento'
              formikState={atomState}
            />
          </div>

          <div className='flex tw-justify-end tw-w-full gap-4'>
            <button type='reset'
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={(e):any => handleReset(e)}>
              Cancelar
            </button>
            <button type="submit"
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-border-blue-600 tw-border-2 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-blue-600 hover:tw-bg-blue-100`}>
              Agregar
            </button>
          </div>
        </form>


      </div>

    </CardTemplate>
  )
}
