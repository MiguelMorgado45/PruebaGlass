import { InputSwitch } from "primereact/inputswitch"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getLogoProductos } from "../../../../helpers/getLogoProductos"

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

    const navegarADetalle = (id: any) => {
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`detalle/${id}`)

    }

    const operadorTemplate = (rowData: any) => {
        return (
            <Link to={`agregarRol/${rowData.id}`} state={{ id: rowData.id }}>
                <button className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Agregar</button>
            </Link>)
    }

    const detalleTemplate = (rowData: any) => {
        return (
            <Link to={`detalle/${rowData.id}`}>
                <button className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Ver</button>
            </Link>)
    }

    const agregarContratacionTemplate = (rowData: any) => {
        return (
            <Link to={`/contrataciones/agregar`}>
                <button className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Agregar</button>
            </Link>)
    }

    const bajaTemplate = (rowData: any) => {
        const [baja, setBaja] = useState(rowData.baja)
        return <InputSwitch checked={baja} onChange={(e) => setBaja(e.value)} />
    }

    const productLogoTemplate = (rowData: any) => {
        return <img src={getLogoProductos(rowData.name)} alt={rowData.name} className='tw-w-8 ' />
    }

    const navegarAgregarCl = (id: any) => {
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`/clientes/agregar`)

    }

    const navegarAgregarOp = (id: any) => {
        localStorage.setItem('id', JSON.stringify(id));
        navigate(`/operadores/agregar`)

    }

    const agregarClienteTemplate = (rowData: any) => {
        return (
            <button onClick={() => navegarAgregarCl(rowData.id)}
                className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Agregar</button>
        )


    }
    const agregarOperadorTemplate = (rowData: any) => {
        return (
            <button onClick={() => navegarAgregarOp(rowData.id)}
                className={`tw-text-xs tw-w-16 tw-h-8 tw-bg-gray-300 tw-rounded-md tw-text-gray-700`}>Agregar</button>
        )
    }

    const rolesTemplate = (rowData: any) => {
        console.log("este row", rowData.roles)
        return (
            <div>
                Administrador de : 
                <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                    {rowData.roles.map((item: any, index: any) => {
                        return <li key={index} className = "tw-text-xs">{item.rol.toLowerCase().split("administrador de")}</li>
                    })}
                </ul>
            </div>

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
        agregarContratacionTemplate,
        bajaTemplate,
        productLogoTemplate,
        navegarADetalle,
        operadorTemplate,
        agregarClienteTemplate,
        agregarOperadorTemplate,
        rolesTemplate
    }
}
