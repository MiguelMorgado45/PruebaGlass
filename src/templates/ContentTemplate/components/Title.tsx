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
        <div className={`glass-mb-10 glass-px-3 glass-gap-1 flex glass-flex-col glass-items-star ${className}`}>
            <p className="glass-text-4xl glass-font-bold glass-w-fit">{title}</p>
            <p className="glass-text-gray-gray glass-text-lg glass-font-normal ">{descr}</p>
        </div>
    )

    const catalogDiv = () => (
        <div className="flex flex-row glass-justify-between glass-w-full">
            <div className={`glass-mb-10 glass-px-3 glass-gap-1 flex glass-flex-col glass-items-star ${className}`}>
                <p className="glass-text-4xl glass-font-bold glass-w-fit">{title}</p>
                <p className="glass-text-gray-gray glass-text-lg glass-font-normal ">{descr}</p>
            </div>
            <Link to={`agregar`}>
                <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold glass-bg-blue-600 glass-h-fit
            glass-px-4 glass-py-3 glass-rounded-md glass-text-white`}><i className='pi pi-plus glass-mr-2'></i> Agregar</button>
            </Link>

        </div>
    )

    const addDiv = () => (
        <div className="flex flex-row glass-justify-between glass-w-full">
            <div className={`glass-mb-10 glass-px-3 glass-gap-1 flex glass-flex-col glass-items-star ${className}`}>
                <p className="glass-text-4xl glass-font-bold glass-w-fit">{title}</p>
                <p className="glass-text-gray-gray glass-text-lg glass-font-normal ">{descr}</p>
            </div>
            <Link to={`/cuentas`}>
                <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold glass-bg-transparent glass-border-2 glass-border-gray-gray glass-h-fit
            glass-px-4 glass-py-3 glass-rounded-md glass-text-gray-gray hover:glass-bg-gray-200 glass-mr-5`}><i className='pi pi-arrow-left glass-mr-2'></i> Regresar</button>
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
