import { Link } from "react-router-dom"

export const getTemplates = () => {

    const imageLogoTemplate = (rowData: any) => {
        return <img src={rowData.logo} alt={rowData.name} className='glass-w-8 ' />
    }

    const contratadoTemplate = (rowData: any) => {
        return <div className={`glass-text-xs glass-font-medium glass-w-8 flex glass-justify-center glass-p-1 glass-rounded-full glass-bg-purple-200 glass-text-purple-900 `}>{rowData.contratados}</div>
    }
    const personasTemplate = (rowData: any) => {
        return <div className={`glass-ml-7 glass-text-xs glass-font-medium glass-w-8 flex glass-justify-center glass-p-1 glass-rounded-full glass-bg-orange-200 glass-text-orange-900 `}>{rowData.personas}</div>
    }
    const operadoresTemplate = (rowData: any) => {
        return <div className={`glass-ml-8 glass-text-xs glass-font-medium glass-w-8 flex glass-justify-center glass-p-1 glass-rounded-full glass-bg-blue-200 glass-text-blue-900 `}>{rowData.operadores}</div>
    }

    const detalleTemplate = (rowData: any) => {
        return(
        <Link to={`detalle/${rowData.id}`}>
            <button className={`glass-text-xs glass-w-16 glass-h-8 glass-bg-gray-300 glass-rounded-md glass-text-gray-700`}>Ver</button>
        </Link>) 
        

    }

    const estadoTemplate = (rowData: any) => {
        return <div className={`flex glass-justify-center glass-items-center glass-text-xs glass-w-16 glass-h-8
        glass-px-3 glass-py-2 glass-rounded-md glass-font-semibold
        ${rowData.estado == 'Activo' ? 'glass-bg-green-template-back glass-text-green-template-t'
                : (rowData.estado == 'Inactivo' ? 'glass-bg-red-template-back glass-text-red-template-t'
                    : 'glass-bg-yellow-template-back glass-text-yellow-template-t')}`}>
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
