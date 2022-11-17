import { useFormik } from 'formik';
import { Checkbox } from 'primereact/checkbox';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import '../../../styles/dom-card.css'
import { InputNumberField, InputTextField } from '../../shared/inputFields';
import { RecoilState } from 'recoil';
import { clienteCardFormState } from '../../../atoms/FormAtoms';
import { CalendarField } from '../../shared/inputFields/CalendarField';

export const ContactoCard = () => {
  
  const atomState:RecoilState<{}> = clienteCardFormState;
  
  const formik = useFormik({
    initialValues: {
      nombre: '',
      phone: undefined,
      correo: '', puesto: '',
      birthday: undefined,
      operador: false
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;

  return (
    <FormCardTemplate titulo='Contacto'>
      <form onSubmit={handleSubmit} className='flex flex-column gap-4' id='Contacto'>
        <div className="flex flex-row gap-4 tw-w-full">
          <InputTextField
            label="Nombre Completo"
            placeholder="Nombre Completo"
            name='nombre'
            formikState={atomState}
          />
          <InputNumberField
            label="Teléfono"
            placeholder="00-0000-0000"
            name='phone'
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
            name='birthday'
            formikState={atomState}
          />
          <div className='tw-w-full flex flex-row gap-3 tw-items-center tw-mt-6'>
            <Checkbox onChange={handleChange} checked={values.operador} name='operador'></Checkbox>
            <label className='tw-font-medium tw-text-sm'>Hacer Operador</label>
          </div>

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
    </FormCardTemplate>
  )
}
