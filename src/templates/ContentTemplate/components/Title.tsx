import { Button } from 'primereact/button';
import { Link, useLocation } from 'react-router-dom';
export interface titleProps {
    add?: boolean,
    catalog?: boolean,
    className?: string,
    descr?: string,
    title: string,
    breadcrums?: boolean
}
const Title = ({ title, descr, className, catalog, add, breadcrums }: titleProps) => {

    const location = useLocation();
    const locArray = location.pathname.split("/")

    const breadCrumsText = () =>{
        const loc = `HOME / ${locArray[1].toUpperCase()} / `
        return(
            <div className='tw-text-lg tw-font-normal '>
                <span className="tw-text-gray-gray">{loc}</span>
                <span className='tw-text-blue-600'>{locArray[2].toUpperCase()}</span>
            </div>
            
        )
    }

    const catalogButton = () => (
            <Link to={`agregar`}>
                <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold tw-bg-blue-600 tw-h-fit
            tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}><i className='pi pi-plus tw-mr-2'></i> Agregar</button>
            </Link>
    )

    const addButton = () => (
            <Link to={`/${locArray[1]}`}>
                <button className={`ad-button hub-text-sm hub-w-28 hub-font-semibold tw-bg-transparent tw-border-2 tw-border-gray-gray tw-h-fit
            tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-gray hover:tw-bg-gray-200 tw-mr-5`}><i className='pi pi-arrow-left tw-mr-2'></i> Regresar</button>
            </Link>
    )
    
    return (
        <>
        <div className={`${(add || catalog) && 'flex flex-row tw-justify-between tw-w-full'}`}>
            <div className={`tw-mb-10 tw-px-3 tw-gap-1 flex tw-flex-col tw-items-star ${className}`}>
                <p className="tw-text-4xl tw-font-bold tw-w-fit">{title}</p>
                {
                    breadcrums ? breadCrumsText() 
                    : (<p className="tw-text-gray-gray tw-text-lg tw-font-normal ">{descr }</p>)
                }
                
            </div>
            {
                catalog
                    ? catalogButton()
                    : (add && addButton())
            }
        </div>
           
        </>
    )
}

export default Title
