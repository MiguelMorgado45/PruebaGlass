import { Link, useNavigate } from "react-router-dom"

export const getTemplates = () => {

    const imageLogoTemplate = (rowData: any) => {
        return <img src={rowData.logo} alt={rowData.name} className='tw-w-8 ' />
    }
    const contratadoTemplate = (rowData: any) => {
        return <div className={`tw-text-xs tw-font-medium tw-w-8 flex tw-justify-center tw-p-1 tw-rounded-full tw-bg-purple-200 tw-text-purple-900 `}>{rowData.contratados}</div>
    }
    const personasTemplate = (rowData: any) => {
        return <div className={`tw-ml-7 tw-text-xs tw-font-medium tw-w-8 flex tw-justify-center tw-p-1 tw-rounded-full tw-bg-orange-200 tw-text-orange-900 `}>{rowData.personas}</div>
    }
    const operadoresTemplate = (rowData: any) => {
        return <div className={`tw-ml-8 tw-text-xs tw-font-medium tw-w-8 flex tw-justify-center tw-p-1 tw-rounded-full tw-bg-blue-200 tw-text-blue-900 `}>{rowData.operadores}</div>
    }

    const navigate = useNavigate();

    const navegarADetalle = (id:any) => {
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`detalle/${id}`)

    }
    const detalleTemplate = (rowData: any) => {
        return(
            <button onClick={() => navegarADetalle(rowData.id)}
             className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Ver</button>
        ) 
        

    }

    const estadoTemplate = (rowData: any) => {
        return <div className={`flex tw-justify-center tw-items-center tw-text-xs tw-w-16 tw-h-8
        tw-px-3 tw-py-2 tw-rounded-md tw-font-semibold
        ${rowData.estado == 'Activo' ? 'tw-bg-green-template-back tw-text-green-template-t'
                : (rowData.estado == 'Inactivo' ? 'tw-bg-red-template-back tw-text-red-template-t'
                    : 'tw-bg-yellow-template-back tw-text-yellow-template-t')}`}>
            {rowData.estado}
        </div>
    }
    return {
        contratadoTemplate,
        detalleTemplate,
        estadoTemplate,
        imageLogoTemplate,
        operadoresTemplate,
        personasTemplate,
    }
}
