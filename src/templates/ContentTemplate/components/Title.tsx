import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
export interface titleProps {
    title: string,
    descr?: string,
    className?: string,
    catalog?: boolean,
    add?: boolean,
    url?: string,
}
const Title = ({ title, descr, className, catalog = false, url, add=false }: titleProps) => {

    const notCatalogDiv = () => (
        <div className={`tw-mb-10 tw-px-3 tw-gap-1 flex tw-flex-col tw-items-star ${className}`}>
            <p className="tw-text-4xl tw-font-bold tw-w-fit">{title}</p>
            <p className="tw-text-gray-gray tw-text-lg tw-font-normal ">{descr}</p>
        </div>
    )

    const catalogDiv = () => (
        <div className="flex flex-row tw-justify-between tw-w-full">
            <div className={`tw-mb-10 tw-px-3 tw-gap-1 flex tw-flex-col tw-items-star ${className}`}>
                <p className="tw-text-4xl tw-font-bold tw-w-fit">{title}</p>
                <p className="tw-text-gray-gray tw-text-lg tw-font-normal ">{descr}</p>
            </div>
            <Link to={`agregar`}>
                <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold tw-bg-blue-600 tw-h-fit
            tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}><i className='pi pi-plus tw-mr-2'></i> Agregar</button>
            </Link>

        </div>
    )

    const addDiv = () => (
        <div className="flex flex-row tw-justify-between tw-w-full">
            <div className={`tw-mb-10 tw-px-3 tw-gap-1 flex tw-flex-col tw-items-star ${className}`}>
                <p className="tw-text-4xl tw-font-bold tw-w-fit">{title}</p>
                <p className="tw-text-gray-gray tw-text-lg tw-font-normal ">{descr}</p>
            </div>
            <Link to={`/cuentas`}>
                <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold tw-bg-transparent tw-border-2 tw-border-gray-gray tw-h-fit
            tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-gray hover:tw-bg-gray-200 tw-mr-5`}><i className='pi pi-arrow-left tw-mr-2'></i> Regresar</button>
            </Link>

        </div>
    )

    return (
        <>
            {
                catalog
                    ? catalogDiv()
                    : (add ? addDiv() : notCatalogDiv())
            }
        </>
    )
}

export default Title
