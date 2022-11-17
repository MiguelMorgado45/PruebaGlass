import { useFormik } from 'formik';
import { Menu } from 'primereact/menu';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { contratacionesCardFormState } from '../../atoms/FormAtoms';
import { ProductosCard } from '../../components/Contrataciones/FormCards';
import { validacionOperadorCard } from '../../components/Contrataciones/FormCards/validacionOperadorForm';
import { OperadorFormType } from '../../components/Contrataciones/types';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';

export const AgregarContratacionesPage = () => {

  let operadoresTotales: object[] = [{}]

  const [operadorForm, setOperadorForm] = useRecoilState<any>(contratacionesCardFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: OperadorFormType = {
    producto: undefined,
    contratados : 0 ,
    alta: '',
    vencimiento: '',
    costo : 0,
    estado : undefined,
}

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: OperadorFormType, { resetForm }) => {
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
    title: 'Contrataciones',
    breadcrums: true,
    add: true,
  }
  const items = [
    // {
    //   icon: 'pi pi-box',
    //   label: 'Cuenta',
    //   command: (event: any) => {
    //     window.location.hash = "Cuenta";
    //   }
    // },
    {
      icon: 'pi pi-lock',
      label: 'Productos',
      command: (event: any) => {
        window.location.hash = "Productos";
      }
    },

  ];

  return loading===true? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/4 flex flex-column">
          <Menu model={items} className=' tw-m-4 tw-mt-10 tw-w-full tw-p-2' />
          {/* <CardTemplate name='ETIQUETAS' classname='tw-w-full'>
            <InputData
              label='Escribe y separa con comas'
              type='inputtext'
            />
          </CardTemplate> */}
          {/* <ProductsCard products={['CLOUD', 'PAYROLL', 'BREAK']} /> */}

        </div>
        <div className="tw-w-3/4 flex flex-column">
          <form onSubmit={operadorForm.handleSubmit}>
            {/* <CuentaCard/> */}
            <ProductosCard />

          
            <div className='tw-w-full flex tw-justify-center gap-4 tw-mt-4'>

              <button type='reset'
                className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
                Cancelar
              </button>

              <button type="submit"
                className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-blue-600 tw-h-fit
                  tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
                Añadir
              </button>

            </div>
          </form>
        </div>
      </div >
    </ContentTemplate >
  ): null
}
