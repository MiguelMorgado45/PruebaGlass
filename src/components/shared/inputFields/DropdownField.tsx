import { useRecoilValue } from 'recoil';
import { FieldType } from './FieldType';
import { Dropdown } from 'primereact/dropdown';

export const DropdownField = ({ name, label, placeholder, options, formikState }: FieldType) => {
    const formik: any = useRecoilValue(formikState)
    return (
        <>
            <div className="flex flex-column gap-1 tw-w-full">
                <label className="tw-font-semibold">{label}</label>

                <Dropdown
                    className={`w-full ${formik.errors[name] && formik.touched[name] && "p-invalid"}`}
                    placeholder = {placeholder}
                    name={name}
                    options={options}
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
