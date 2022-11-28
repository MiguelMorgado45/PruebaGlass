import { useRecoilValue } from 'recoil';
import { FieldType } from './FieldType';
import { MultiSelect } from 'primereact/multiselect';

export const MultiSelectField = ({ name, label, placeholder, options, formikState }: FieldType) => {
    const formik: any = useRecoilValue(formikState)
    return (
        <>
            <div className="flex flex-column gap-1 tw-w-full">
                <label className="tw-font-semibold">{label}</label>

                <MultiSelect 
                    className={`w-full ${formik.errors[name] && formik.touched[name] && "p-invalid"}`}
                    placeholder = {placeholder}
                    name={name}
                    options={options}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxSelectedLabels={3} />

                <div className='h-8 text-sm text-red-800'>
                    {formik.touched[name] && formik.touched[name] && <div className='h-4'>{formik.errors[name]}</div>}
                </div>
            </div>
        </>
    )
}