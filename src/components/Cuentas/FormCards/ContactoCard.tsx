import { useFormik } from 'formik';
import { RecoilState } from 'recoil';
import { cuentaCardFormState } from '../../../atoms/FormAtoms';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { ContactoType } from '../types';
import { InputTextField } from '../../shared/inputFields/InputTextField';

export const ContactoCard = () => {

  const atomState:RecoilState<{}> = cuentaCardFormState;

  const valorInicial: ContactoType = {
    correo: '',
    phone: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    // validate: validacionCuentaCard,
  });
  const { handleChange, values } = formik

  return (
    <FormCardTemplate titulo='Contacto'>
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-4">
        <div className="flex flex-row gap-4 tw-w-full">
          <InputTextField
            label="Correo de la Empresa"
            placeholder="correo@dominio.com"
            name='correo'
            formikState={atomState}
          />
          <InputTextField
            label="Número de la empresa"
            placeholder="99-9999-9999"
            name='phone'
            formikState={atomState}
          />
        </div>

        <div className='flex tw-justify-end tw-w-full gap-4 tw-text-sm tw-font-semibold'>
          <button type='reset'
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600 tw-bg-gray-200`}
            onClick={() => formik.resetForm()}
          >
            Cancelar
          </button>
          <button type="submit"
            className={`tw-w-40 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white tw-bg-blue-600`}
          >
            Agregar
          </button>
        </div>
      </form>
    </FormCardTemplate>

  )
}
