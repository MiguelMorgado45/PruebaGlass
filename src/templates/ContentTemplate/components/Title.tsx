import { Button } from 'primereact/button';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
export interface titleProps {
    className?: string,
    descr?: string,
    title: string,
    breadcrums?: boolean,
    children?: ReactNode,
}
const Title = ({ title, descr, className, breadcrums, children }: titleProps) => {

    const location = useLocation();
    const locArray = location.pathname.split("/")

    const breadCrumsText = () => {
        const loc = `HOME / ${locArray[1].toUpperCase()} / `
        return (
            <div className='tw-text-lg tw-font-normal '>
                <Link to={'dashboard'}>
                    <span className="tw-text-gray-gray">HOME</span>
                </Link>
                <span className='tw-text-gray-gray'> / </span>
                <Link to={`/${locArray[1]}`}>
                    <span className='tw-text-gray-gray'>{locArray[1].toUpperCase()}</span>
                </Link>
                <span className='tw-text-gray-gray'> / </span>
                <span className='tw-text-blue-600'>{locArray[2].toUpperCase()}</span>
            </div>

        )
    }

    return (
        <>
            <div className='flex flex-row tw-justify-between tw-w-full'>
                <div className={`tw-mb-10 tw-px-3 tw-gap-1 flex tw-flex-col tw-items-star ${className}`}>
                    <p className="tw-text-4xl tw-font-bold tw-w-fit">{title}</p>
                    {
                        breadcrums ? breadCrumsText()
                            : (<p className="tw-text-gray-gray tw-text-lg tw-font-normal ">{descr}</p>)
                    }

                </div>
                <div>
                    {children}
                </div>

            </div>

        </>
    )
}

export default Title
