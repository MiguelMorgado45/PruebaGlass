import { useFormik } from 'formik';

import { Checkbox } from 'primereact/checkbox';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';

export const DesactivarCard = () => {
    const formik = useFormik({
        initialValues: {
            operador: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const { handleChange, handleSubmit, handleReset, values } = formik;
    const reset = () => {
        handleReset()

    }
    return (
        <FormCardTemplate titulo='Desactivar Cliente'>
            <form onSubmit={handleSubmit} className='flex flex-column gap-2' id='Desactivar'>

                <div className='tw-w-full flex flex-row gap-3 tw-items-center tw-mt-4'>
                    <Checkbox 
                        onChange={handleChange} 
                        checked={values.operador} 
                        name='operador'
                    />
                    <label className='tw-font-semibold tw-text-sm'>Deseo desactivar a este cliente</label>
                </div>

                <div className='flex tw-justify-end tw-w-full gap-4'>
                    <button type="submit"
                        className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-red-600 tw-h-fit
                  tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
                        Desactivar
                    </button>
                </div>

            </form>
        </FormCardTemplate>
    )
}
