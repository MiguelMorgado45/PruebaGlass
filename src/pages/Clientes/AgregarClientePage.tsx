import { useFormik } from 'formik';
import { Divider } from 'primereact/divider';
import { Menu } from 'primereact/menu';
import { useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { DomicilioCard, GeneralesCard, PerfilCard } from '../../components/Clientes/FormCards';
import { clienteCardFormState } from '../../atoms/FormAtoms';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import { FormCardTemplate } from '../../templates/FormCardTemplate/FormCardTemplate';
import { ClienteFormType } from '../../components/Clientes/types';
import { validacionClienteForm } from '../../components/Clientes/FormCards/validacionClienteForm';

export const AgregarClientePage = () => {

  const atomState:RecoilState<{}> = clienteCardFormState;
  const [clienteForm, setClienteForm] = useRecoilState<any>(atomState)
  const [loading, setLoading] = useState(false);

  const valorInicial: ClienteFormType = {
    razonSocial: '',
    nombreComercial: '',
    rfc: '',
    regimenFiscal: '',
    giro: '',
    registroPatronal: '',
    calle: '',
    exterior: '',
    interior: '',
    colonia: '',
    alcaldia: '',
    estado: '',
    pais: '',
    codigoPostal: '',
  }

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: ClienteFormType, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validate: validacionClienteForm,
  });

  useEffect(() => {
    setClienteForm(formik)
    setLoading(true)
  }, [formik.values, formik.errors, formik.touched])


  const title = {
    title: 'Clientes',
    breadcrumbs: true,
    add: true,
  }
  const items = [
    {
      icon: 'pi pi-box',
      label: 'Cuenta',
      command: (event: any) => {
        window.location.hash = "Cuenta";
      }
    },
    {
      icon: 'pi pi-briefcase',
      label: 'Generales',
      command: (event: any) => {
        window.location.hash = "Generales";
      }
    },
    {
      icon: 'pi pi-home',
      label: 'Domicilio',
      command: (event: any) => {
        window.location.hash = "Domicilio";
      }
    },
    {
      icon: 'pi pi-user',
      label: 'Contacto',
      command: (event: any) => {
        window.location.hash = "Contacto";
      }
    },
    {
      icon: 'pi pi-thumbs-down',
      label: 'Desactivar',
      command: (event: any) => {
        window.location.hash = "Desactivar";
      }
    },

  ];

  return loading === true ? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full tw-h-full gap-6 flex flex-row">
        <div className="tw-w-1/5 flex flex-column">
          <PerfilCard />
          <Menu model={items} className=' tw-m-4 tw-w-full tw-p-2' />

        </div>
        <div className="tw-w-4/5 flex flex-column">
          <span className='tw-mx-4 tw-text-sm tw-font-medium tw-text-gray-gray'>DATOS</span>
          <form onSubmit={clienteForm.handleSubmit}>
            <FormCardTemplate titulo='Generales'>
              <GeneralesCard />
              <Divider></Divider>
              <DomicilioCard />
            </FormCardTemplate>
            <div className='tw-w-full flex tw-justify-center gap-4'>

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
