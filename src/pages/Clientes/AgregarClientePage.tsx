import { useEffect, useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { useFormik } from "formik";
import { Steps } from "primereact/steps";

import { clienteAgregaFormState } from "../../atoms/ClienteAtom";
import {menuItems} from '../../helpers/menuItems'
import { ClienteFormType } from "../../components/Clientes/types";
import { validacionClienteForm } from "../../components/Clientes/FormCards/validacionClienteForm";

import { ContactoCard, CuentaCard, DomicilioCard } from "../../components/Clientes/FormCards";
import { ContentTemplate } from "../../templates/ContentTemplate/ContentTemplate";
import { GeneralesCardAgregar } from "../../components/Clientes/FormCards/GeneralesCardAgregar";

export const AgregarClientePage = () => {
    const title = {
        title: `Clientes / Agregar`,
        breadcrums: true,
    };

    const atomState: RecoilState<{}> = clienteAgregaFormState;
    const [clienteForm, setClienteForm] = useRecoilState<any>(atomState);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);

    const valorInicial: ClienteFormType = {
            cuenta: "",
            descripcion: "",
            razonSocial: "",
            nombreComercial: "",
            rfc: "",
            regimenFiscal: "",
            giro: "",
            calle: "",
            exterior: "",
            interior: "",
            colonia: "",
            alcaldia: "",
            estado: "",
            pais: "",
            codigoPostal: "",
            nombreContacto: "",
            telefono: undefined,
            correo: "",
            puesto: "",
            cumpleanos: "",
    };

    const formik = useFormik({
        initialValues: { ...valorInicial },
        onSubmit: (values: ClienteFormType, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
        validate: validacionClienteForm,
    });

    useEffect(() => {
        setClienteForm(formik);
        setLoading(true);
    }, [formik.values, formik.errors, formik.touched]);

    const {agregarClienteitems} = menuItems();

    return loading === true ? (
        <ContentTemplate titleProps={title}>
            <div className="tw-w-full flex flex-column tw-mx-20">
                <Steps
                    model={agregarClienteitems}
                    activeIndex={step}
                    onSelect={(e) => setStep(e.index)}
                    readOnly={false}
                />

                <form onSubmit={clienteForm.handleSubmit}>
                    <div className={`${step != 0 && "tw-hidden"}`}>
                        <CuentaCard setStep={setStep} />{" "}
                    </div>
                    <div className={`${step != 1 && "tw-hidden"}`}>
                        <GeneralesCardAgregar setStep={setStep} />
                    </div>
                    <div className={`${step != 2 && "tw-hidden"}`}>
                        <DomicilioCard setStep={setStep} />
                    </div>
                    <div className={`${step != 3 && "tw-hidden"}`}>
                        <ContactoCard setStep={setStep} />
                    </div>
                </form>
            </div>
        </ContentTemplate>
    ) : null;
};
