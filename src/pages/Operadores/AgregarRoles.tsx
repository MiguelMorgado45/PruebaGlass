import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { operadorDetalleFormState } from '../../atoms/OperadorAtom'
import { GeneralesCard } from '../../components/Operadores/FormCards/GeneralesCard'
import { RolesCard } from '../../components/Operadores/FormCards'
import { OperadoresDetalleType } from '../../components/Operadores/types'
import { getOperadorbyId } from '../../helpers/getOperadorbyId'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'

export const AgregarRoles = () => {
    const location = useLocation();
    const values = getOperadorbyId(location.state.id)

    const [operadorForm, setOperadorForm] = useRecoilState<any>(operadorDetalleFormState)
    const [loading, setLoading] = useState(false);

    const valorInicial: OperadoresDetalleType = {
        selected: null,
    }

    const formik = useFormik({
        initialValues: { ...valorInicial },
        onSubmit: (values: any, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        }
    });

    useEffect(() => {
        setOperadorForm(formik)
        setLoading(true)
    }, [formik.values, formik.errors, formik.touched])

    useEffect(() => {
        
        formik.setValues({
            selected: values ? values.roles : ''
        })
    }, [])


    const title = {
        title: 'Operadores',
        breadcrums: true,
    }

    return loading === true ? (
        <ContentTemplate titleProps={title}>
            <div className="tw-w-full flex flex-column tw-mx-48">
                <form onSubmit={operadorForm.handleSubmit}>
                    <GeneralesCard nombre={values ? values.name : ''} descr={values ? values.descr : ''}/>
                    <RolesCard /> 
                </form>

            </div>

        </ContentTemplate>
    ) : null
}
