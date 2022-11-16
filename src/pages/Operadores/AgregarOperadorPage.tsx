import { Menu } from 'primereact/menu';

import { OperadorCard, PerfilCard, RolesCard } from '../../components/Operadores/FormCards';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import '../../styles/operadores.css'
import { CardTemplate } from '../../templates/CardTemplate/CardTemplate';
import { InputData } from '../../components/shared/InputData/InputData';
import { Divider } from 'primereact/divider';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { OperadoresFormType } from '../../components/Operadores/types';
import { validacionOperadorCard } from '../../components/Operadores/FormCards/validacionOperadoresForm';
import { useRecoilState } from 'recoil';
import { operadorCardFormState } from '../../atoms/FormAtoms';

export const AgregarOperadorPage = () => {

  const [operadorForm, setOperadorForm] = useRecoilState<any>(operadorCardFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: OperadoresFormType = {
    nombre: '',
    fechaAlta: '',
    correo: '',
    telefono: '',
    descripcion: '',
    selected: ''
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: OperadoresFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionOperadorCard,
  });

  useEffect(() => {
    setOperadorForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])


  const title = {
    title: 'Operadores',
    breadcrums: true,
    add: true,
  }
  const items = [
    {
      icon: 'pi pi-briefcase',
      label: 'Operador',
      command: (event: any) => {
        window.location.hash = "Operador";
      }
    },
    {
      icon: 'pi pi-id-card',
      label: 'Asignar Roles',
      command: (event: any) => {
        window.location.hash = "Roles";
      }
    },

  ];

  return loading === true ? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/4 flex flex-column">
          <PerfilCard />
          <Menu model={items} className=' tw-m-4 tw-w-full tw-p-2' />
          <CardTemplate name='ETIQUETAS' classname='tw-w-full'>
            <InputData
              label='Escribe y separa con comas'
              type='inputtext'
            />
          </CardTemplate>
        </div>

        <div className="tw-w-3/4 flex flex-column">
          <form onSubmit={operadorForm.handleSubmit}>
            <CardTemplate name="DATOS">
              <OperadorCard />
              <Divider></Divider>
              <RolesCard />
            </CardTemplate>

            <div className='tw-w-full flex tw-justify-center gap-4 tw-mt-4'>

              <button type='reset'
                className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
                Cancelar
              </button>

              <button type="submit"
                className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
                Añadir
              </button>
            </div>
          </form>
        </div>
      </div >
    </ContentTemplate >
  ) : null
}