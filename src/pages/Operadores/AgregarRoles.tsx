import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { operadorRolesFormState } from '../../atoms/OperadorAtom'
import { getOperadorbyId } from '../../helpers/getOperadorbyId'

import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'
import { GeneralesCard } from '../../components/Operadores/FormCards/GeneralesCard'
import { RolesCard } from '../../components/Operadores/FormCards'
import { RolesType } from '../../components/Operadores/types'

const rolVacio = {
    id: '',
    rol: '',
    descr: ''
}

export const AgregarRoles = () => {
    const location = useLocation();

    const [operadorForm, setOperadorForm] = useRecoilState<any>(operadorRolesFormState)
    const [loading, setLoading] = useState(false);
    const [operador, setOperador] = useState<any>({
        nombre: '',
        descripcion: '',
        selected: rolVacio
    })

    const valorInicial: RolesType = {
        selected: [rolVacio],
    }

    const formik = useFormik({
        initialValues: { ...valorInicial },
        onSubmit: (values: any) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    useEffect(() => {
        setOperadorForm(formik)
        setLoading(true)
    }, [formik.values, formik.errors, formik.touched])

    useEffect(() => {
        const values = getOperadorbyId(location.state.id)
        formik.setValues({
            selected: values ? values.roles : [rolVacio]
        })
        setOperador((anterior:any)=> ({
            ...anterior,
            nombre: values ? values.nombre : '',
            descripcion: values ? values.descr : '',
            selected: values ? values.roles : [rolVacio]
        }))
    }, [])

    const title = {
        title: 'Operadores',
        breadcrums: true,
    }

    return loading === true ? (
        <ContentTemplate titleProps={title}>
            <div className="tw-w-full flex flex-column tw-mx-48">
                <form onSubmit={operadorForm.handleSubmit}>
                    <GeneralesCard nombre={operador.nombre} descr={operador.descripcion} />
                    <RolesCard selected={operador.selected} />
                </form>
            </div>
        </ContentTemplate>
    ) : null
}
