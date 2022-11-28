import { ClienteFormType } from "../components/Clientes/types";

export const tableClientes = [
    {
        id: "1",
        logo: "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982614/TWComponents/icon-kiosko_hy55uh.svg",
        name: "Brounchis Natural",
        alta: "18/05/2018",
        contrataciones:
            "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-mobile_hnqagb.svg",
        personas: "132",
        operadores: "10",
        cuenta: "BROUNCHIS",
    },
    {
        id: "2",
        logo: "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982614/TWComponents/icon-kiosko_hy55uh.svg",
        name: "Katoen Natie Servicios Logística",
        alta: "18/05/2018",
        contrataciones:
            "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-mobile_hnqagb.svg",
        personas: "16",
        operadores: "5",
        cuenta: "KATOEN",
    },
    {
        id: "3",
        logo: "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982614/TWComponents/icon-kiosko_hy55uh.svg",
        name: "Katoen Natie Altamira, S.A. de C.V.",
        alta: "18/05/2018",
        contrataciones:
            "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-mobile_hnqagb.svg",
        personas: "56",
        operadores: "10",
        cuenta: "KATOEN",
    },
    {
        id: "4",
        logo: "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982614/TWComponents/icon-kiosko_hy55uh.svg",
        name: "Katoen Natie Mexicana, S.A...",
        alta: "18/05/2018",
        contrataciones:
            "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-mobile_hnqagb.svg",
        personas: "45",
        operadores: "5",
        cuenta: "KATOEN",
    },
    {
        id: "5",
        logo: "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982614/TWComponents/icon-kiosko_hy55uh.svg",
        name: "Servicios Generales de Logí...",
        alta: "18/05/2018",
        contrataciones:
            "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-mobile_hnqagb.svg",
        personas: "15",
        operadores: "5",
        cuenta: "KATOEN",
    },
    {
        id: "6",
        logo: "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982614/TWComponents/icon-kiosko_hy55uh.svg",
        name: "Polymer Contractors Cartag...",
        alta: "18/05/2018",
        contrataciones:
            "https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-mobile_hnqagb.svg",
        personas: "80",
        operadores: "2",
        cuenta: "KATOEN",
    },
];

export const typeCuentas = [
    {
        type: "TODAS",
        number: 71,
    },
];

export const clientes: ClienteFormType[] = [
    {
        id: "1",
        general: {
            cuenta: "BROUNCHIS",
            descripcion: "Descripción 1",
        },
        fiscal: {
            razonSocial: "Brounchis Natural S.A. de C.V",
            nombreComercial: "Brounchis Natural",
            rfc: "BONT2211011Y2",
            regimenFiscal: "602 - General de Ley Personas Morales",
            giro: "GIRO 1",
        },
        domicilio: {
            calle: "Bahía de Ballenas",
            exterior: "63",
            interior: "",
            colonia: "Verónica Anzúres",
            alcaldia: "Miguel Hidalgo",
            estado: "CDMX",
            pais: "México",
            codigoPostal: "11300",
        },
        contacto: {
            nombreContacto: "Julio Iglesias",
            telefono: "5525118273",
            correo: "julio@empresa.mx",
            puesto: "Soporte",
            cumpleanos: "20/10/2022",
        },
    },
    {
        id: "2",
        general: {
            cuenta: "Katoen Natie Servicios Logística",
            descripcion: "",
        },
        fiscal: {
            razonSocial: "Katoen Natie Servicios Logística S.A. de C.V",
            nombreComercial: "Katoen Natie Servicios Logística",
            rfc: "KANS2106157XA",
            regimenFiscal: "602 - General de Ley Personas Morales",
            giro: "GIRO 2",
        },
        domicilio: {
            calle: "Calle Castilla Ote.",
            exterior: "39",
            interior: "",
            colonia: "Los Reyes",
            alcaldia: "Azcapotzalco",
            estado: "CDMX",
            pais: "México",
            codigoPostal: "02010",
        },
        contacto: {
            nombreContacto: "Julio Iglesias",
            telefono: "5525118273",
            correo: "julio@empresa.mx",
            puesto: "Soporte",
            cumpleanos: "20/10/2022",
        },
    },
    {
        id: "3",
        general: {
            cuenta: "KATOEN",
            descripcion: "",
        },
        fiscal: {
            razonSocial: "Katoen Natie Altamira, S.A. de C.V.",
            nombreComercial: "Katoen Natie Altamira",
            rfc: "KANA200414MB7",
            regimenFiscal: "602 - General de Ley Personas Morales",
            giro: "GIRO 3",
        },
        domicilio: {
            calle: "Lic. José Urbano Fonseca",
            exterior: "7370",
            interior: "5135",
            colonia: "Maximino Avila Camacho",
            alcaldia: "Gustavo A. Madero",
            estado: "CDMX",
            pais: "México",
            codigoPostal: "07370",
        },
        contacto: {
            nombreContacto: "Julio Iglesias",
            telefono: "5525118273",
            correo: "julio@empresa.mx",
            puesto: "Soporte",
            cumpleanos: "20/10/2022",
        },
    },
    {
        id: "4",
        general: {
            cuenta: "Katoen",
            descripcion: "Descripción 1",
        },
        fiscal: {
            razonSocial: "Katoen Natie Mexicana, S.A...",
            nombreComercial: "Katoen Natie Mexicana, S.A...",
            rfc: "BONT2211011Y2",
            regimenFiscal: "602 - General de Ley Personas Morales",
            giro: "GIRO 1",
        },
        domicilio: {
            calle: "Bahía de Ballenas",
            exterior: "63",
            interior: "",
            colonia: "Verónica Anzúres",
            alcaldia: "Miguel Hidalgo",
            estado: "CDMX",
            pais: "México",
            codigoPostal: "11300",
        },
        contacto: {
            nombreContacto: "Julio Iglesias",
            telefono: "5525118273",
            correo: "julio@empresa.mx",
            puesto: "Soporte",
            cumpleanos: "20/10/2022",
        },
    },
    {
        id: "5",
        general: {
            cuenta: "Katoen Natie Servicios Logística",
            descripcion: "",
        },
        fiscal: {
            razonSocial: "Servicios Generales de Logí...",
            nombreComercial: "Servicios Generales de Logí...",
            rfc: "KANS2106157XA",
            regimenFiscal: "602 - General de Ley Personas Morales",
            giro: "GIRO 2",
        },
        domicilio: {
            calle: "Calle Castilla Ote.",
            exterior: "39",
            interior: "",
            colonia: "Los Reyes",
            alcaldia: "Azcapotzalco",
            estado: "CDMX",
            pais: "México",
            codigoPostal: "02010",
        },
        contacto: {
            nombreContacto: "Julio Iglesias",
            telefono: "5525118273",
            correo: "julio@empresa.mx",
            puesto: "Soporte",
            cumpleanos: "20/10/2022",
        },
    },
    {
        id: "6",
        general: {
            cuenta: "KATOEN",
            descripcion: "",
        },
        fiscal: {
            razonSocial:"Polymer Contractors Cartag...",
            nombreComercial: "Katoen Natie Altamira",
            rfc: "KANA200414MB7",
            regimenFiscal: "602 - General de Ley Personas Morales",
            giro: "GIRO 3",
        },
        domicilio: {
            calle: "Lic. José Urbano Fonseca",
            exterior: "7370",
            interior: "5135",
            colonia: "Maximino Avila Camacho",
            alcaldia: "Gustavo A. Madero",
            estado: "CDMX",
            pais: "México",
            codigoPostal: "07370",
        },
        contacto: {
            nombreContacto: "Julio Iglesias",
            telefono: "5525118273",
            correo: "julio@empresa.mx",
            puesto: "Soporte",
            cumpleanos: "20/10/2022",
        },
    },
];
