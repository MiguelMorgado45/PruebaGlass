import { useFormik } from 'formik';
import {Steps} from 'primereact/steps'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { validacionOperadorCard } from '../../components/Contrataciones/FormCards/validacionOperadorForm';
import { ContracionFormType } from '../../components/Contrataciones/types';
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate';
import '../../styles/contrataciones.css'
import { ClienteCard } from '../../components/Contrataciones/FormCards';
import { ContactoCard } from '../../components/Contrataciones/FormCards/ContactoCard';
import { GeneralesCard } from '../../components/Contrataciones/FormCards/GeneralesCard';
import { contratacionAgregaFormState } from '../../atoms/ContratacionAtom';
import {menuItems} from '../../helpers/menuItems'


export const AgregarContratacionesPage = () => {

  let operadoresTotales: object[] = [{}]
  const [step, setStep] = useState(0);
  const [operadorForm, setOperadorForm] = useRecoilState<any>(contratacionAgregaFormState)
  const [loading, setLoading] = useState(false);

  const valorInicial: ContracionFormType = {
    cliente: '',
    descr: '',
    producto: '',
    contratados : 0,
    alta: '',
    expira: '',
    costo : 0,
    estado : '',
    nombreContacto: '', 
    telefono: '',
    puesto: '',
    correo: '',
    cumple: '',
    mismo: false,
}

  const formik = useFormik({
    initialValues: { ...valorInicial },
    onSubmit: (values: ContracionFormType, { resetForm }) => {
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
  }
  
  const {agregarContratacionitems} = menuItems();

  return loading===true? (
    <ContentTemplate titleProps={title}>
      <div className="tw-w-full flex flex-column tw-mx-20">

        <Steps model={agregarContratacionitems} activeIndex={step} onSelect={(e) => setStep(e.index)} readOnly={false} />

        <form onSubmit={operadorForm.handleSubmit}>
              <div className={`${step != 0 && 'tw-hidden'}`}><ClienteCard setStep={setStep}/></div>
              <div className={`${step != 1 && 'tw-hidden'}`}><GeneralesCard setStep={setStep}/></div>
              <div className={`${step != 2 && 'tw-hidden'}`}><ContactoCard setStep={setStep}/></div>
        </form>

      </div>
    </ContentTemplate >
  ): null
}
