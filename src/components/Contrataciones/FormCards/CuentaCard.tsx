import { useFormik } from 'formik';
import { RecoilState } from 'recoil';
import { cuentaCardFormState } from '../../../atoms/FormAtoms';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate';
import { DropdownField } from '../../shared/inputFields/DropdownField';
import { InputTextField } from '../../shared/inputFields/InputTextField';

export const CuentaCard = () => {

  const atomState:RecoilState<{}> = cuentaCardFormState;

  const formik = useFormik({
    initialValues: { cuenta: '', cliente: '', comentarios: ''},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, values } = formik;


  return (
    <CardTemplate name="DATOS" >
      <div className="flex flex-column gap-4" id='Cuenta'>
        <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">Cuenta</p>

        <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
          <div className="flex flex-row gap-4 tw-w-full">
            <DropdownField
              label='Cuenta:'
              placeholder="Nombre de la cuenta"
              name='cuenta'
              options={['OPC1', 'OPC2','OPC3','OPC4']}
              formikState={atomState}
            />
            <DropdownField
              label='Cliente:'
              placeholder="Nombre del cliente"
              name='cliente'
              options={['OPC1', 'OPC2','OPC3','OPC4']}
              formikState={atomState}
            />
          </div>
          
          <InputTextField
              label="Comentarios:"
              placeholder="Escribe"
              name='comentarios'
              formikState={atomState}
            />

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
