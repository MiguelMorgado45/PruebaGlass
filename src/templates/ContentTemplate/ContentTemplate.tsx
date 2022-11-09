import { ReactNode, useContext } from 'react';
import Title, { titleProps } from './components/Title'


interface ContentProps {
    children: ReactNode,
    className?: string,
    titleProps: titleProps,
    catalog?: boolean,
    add?: boolean,
}

export const ContentTemplate = ({ children, className, titleProps, catalog=false, add=false }: ContentProps) => {
    const { title, descr } = titleProps;

    return (
        <div className={`glass-w-full glass-p-4 flex flex-column`}>
            <Title
                title={title}
                descr={descr}
                catalog={catalog}
                add={add}
            />
            <div className={`flex gap-4 flex-wrap ${className}`}>
                {children}
            </div>


        </div>
    )
}
