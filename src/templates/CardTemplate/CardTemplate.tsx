import { Card } from 'primereact/card';
import { ReactNode } from 'react';

interface PropsCardTemplate{
    name: string,
    children: ReactNode,
    classname?: string
}
export const CardTemplate = ({
    name,
    children, 
    classname
}: PropsCardTemplate) => {
    return (
        <div>
            <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray'>{name}</span>
            <Card className={`tw-m-4 ${classname}`} >
                {children}    
            </Card>
        </div>
    )
}
