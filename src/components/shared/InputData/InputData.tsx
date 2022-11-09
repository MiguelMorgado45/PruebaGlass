import { Calendar } from "primereact/calendar";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';

import { ChangeEvent, useState } from "react";

interface InputDataProps {
    label: string,
    placeholder?: string,
    type: 'number' | 'calendar' | 'textarea' | 'inputtext' | 'email' | 'phone' | 'dropdown',
    name?: string,
    onchange?: { (e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; }
    value?: any,
    options?: any[],
    
}
export const InputData = ({
    label = 'Etiqueta',
    placeholder,
    type,
    name,
    onchange,
    value,
    options, 
}: InputDataProps) => {
    const typeInput = () => {
        switch (type) {
            case 'inputtext':
                return (<InputText value={value} name={name} onChange={onchange} placeholder={placeholder} />)

            case 'textarea':
                return (<InputTextarea value={value} name={name} onChange={onchange} placeholder={placeholder} />)

            case 'calendar':
                return (<Calendar value={value} name={name} onChange={onchange} placeholder={placeholder} showIcon dateFormat="dd/mm/yy" />)

            case 'number':
                return (<InputNumber value={value} name={name} onChange={onchange} placeholder={placeholder} useGrouping={false} showButtons />)
            case 'phone':
                return (<InputMask mask="99-9999-9999" value={value} name={name} onChange={onchange} placeholder={placeholder} />)
            case 'dropdown':
                return (<Dropdown value={value} name={name} onChange={onchange} options={options} placeholder={placeholder} />)

            default:
                return (<InputText value={value} name={name} onChange={onchange} placeholder={placeholder} />)
        }
    }
    return (
        <div className="flex flex-column gap-1 glass-w-full">
            <label className="glass-font-semibold">{label}</label>
            {
                typeInput()
            }

        </div>
    )
}
