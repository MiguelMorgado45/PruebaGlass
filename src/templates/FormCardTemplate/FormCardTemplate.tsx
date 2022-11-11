import { Formik } from 'formik';

import { Card } from "primereact/card";
import { ReactNode } from 'react';


interface FormCardTemplateProps {
    children: ReactNode,
    titulo:string
}

export const FormCardTemplate = ({children, titulo}:FormCardTemplateProps) => {
    return (
        <Card className="tw-m-4" id='Contacto'>
            <div className="flex flex-column gap-4">
                <p className="tw-text-orangetw tw-text-2xl tw-font-semibold">{titulo}</p>
                {children}
            </div>
        </Card>
    )
}
