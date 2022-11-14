import { InputText } from 'primereact/inputtext'
import { useRecoilValue } from 'recoil';
import { FieldType } from './FieldType';

export const InputTextField = ({ name, label, placeholder, formikState }: FieldType) => {
    const formik: any = useRecoilValue(formikState)
    return (
        <>
            <div className="flex flex-column gap-1 tw-w-full">
                <label className="tw-font-semibold">{label}</label>

                <InputText
                    className={`w-full ${formik.errors[name] && formik.touched[name] && "p-invalid"}`}
                    placeholder = {placeholder}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='h-8 text-sm text-red-800'>
                    {formik.touched[name] && formik.touched[name] && <div className='h-4'>{formik.errors[name]}</div>}
                </div>
            </div>
        </>
    )
}
