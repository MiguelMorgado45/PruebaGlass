import { ReactNode, useContext } from 'react';
import Title, { titleProps } from './components/Title'


interface ContentProps {
    children: ReactNode,
    classNameC?: string,
    titleProps: titleProps,
}

export const ContentTemplate = ({ children, classNameC, titleProps, }: ContentProps) => {
    const { title, descr, add, catalog, className, breadcrums} = titleProps;

    return (
        <div className={`tw-w-full tw-p-4 flex flex-column`}>
            <Title
                title={title}
                descr={descr}
                add = {add}
                catalog = {catalog}
                className ={className}
                breadcrums ={breadcrums}
            />
            <div className={`flex gap-4 flex-wrap ${classNameC}`}>
                {children}
            </div>


        </div>
    )
}
