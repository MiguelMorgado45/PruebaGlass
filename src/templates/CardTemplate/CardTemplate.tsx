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
            <span className='glass-mx-4 glass-text-sm glass-font-medium glass-text-gray-gray'>{name}</span>
            <Card className={`glass-m-4 ${classname}`} >
                {children}    
            </Card>
        </div>
    )
}
