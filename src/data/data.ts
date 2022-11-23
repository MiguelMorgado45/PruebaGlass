export const notifications = [
    {
        title: 'Nueva notificación',
        desc: 'Esta es una pequeña notificación',
        date: '10/02/22'
    },
    {
        title: '¡Alerta Cloud!',
        desc: 'Cloud esta próximo a caducar',
        date: '10/02/22'
    },
    {
        title: '¡Alerta Retail!',
        desc: 'Retail esta próximo a caducar',
        date: '10/02/22'
    },
]

export const cuentas = [
    {
        id: '1',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Disi',
        alta: '18/05/2018',
        contratados: '30',
        detalles: 'Ver',
        estado: 'Inactivo',
        descripcion: 'Descripción de Disi'
    },
    {
        id: '2',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Hergom',
        alta: '03/02/2018',
        contratados: '168',
        detalles: 'Ver',
        estado: 'Activo',
        descripcion: 'Descripción de Hergom'
    },
    {
        id: '3',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Señor Ferretero',
        alta: '11/02/2018',
        contratados: '132',
        detalles: 'Ver',
        estado: 'Activo',
        descripcion: 'Descripción de Señor Ferretero'
    },
    {
        id: '4',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Katoen',
        alta: '18/05/2018',
        contratados: '290',
        detalles: 'Ver',
        estado: 'Activo',
        descripcion: 'Descripción de Katoen'
    },
    {
        id: '5',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Despacho Lavalle y Asociados',
        alta: '30/04/2020',
        contratados: '300',
        detalles: 'Ver',
        estado: 'Activo',
        descripcion: 'Descripción de Despacho de Lavalle y Asociados'
    },
    {
        id: '6',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        name: 'Laboratorio Rapha',
        alta: '11/04/2022',
        contratados: '10',
        detalles: 'Ver',
        estado: 'Demo',
        descripcion: 'Descripción de Laboratorio Rapha'
    },
]
export const typeCuentas = [
    {
        type: 'TODAS',
        number: 71
    },
    {
        type: 'ACTIVAS',
        number: 58
    },
    {
        type: 'INACTIVAS',
        number: 13
    },
    {
        type: 'DEMOS',
        number: 1
    },
]


export const contactoDetalleCuenta = [
    {
        id: "1",
        correo: 'Disi@email.com',
        phone: '89-8989-8989',
    },
    {
        id: "2",
        correo: 'Hergom@email.com',
        phone: '79-7979-7979',
    },
    {
        id: "3",
        correo: 'Ferretero@email.com',
        phone: '59-5959-5959',
    }
]

export const vendedorDetalleCuenta = [
    {
        id: "1",
        vendedor: 'vendedor A',
        comentario: 'Comentario del Público Disi',
    },
    {
        id: "2",
        vendedor: 'vendedor B',
        comentario: 'Comentario del Público Hergom',
    },
    {
        id: "3",
        vendedor: 'vendedor C',
        comentario: 'Comentario del Señor Ferretero',
    }
]

export const minidashDetalleCuenta = [
    {
        id: "1",
        clientes : "10",
        operadores : "20",
        vendedor: 'vendedor A',
        encargado: 'Nancy Cruz Corona',
    },
    {
        id: "2",
        clientes : "13",
        operadores : "23",
        vendedor: 'vendedor B',
        encargado: 'Nancy Cruz Corona',
    },
    {
        id: "3",
        clientes : "16",
        operadores : "26",
        vendedor: 'vendedor C',
        encargado: 'Nancy Cruz Corona',
    }
]

export const typeDetallesCuentas = [
    {
      type: 'CLIENTES',
      number: 1,
      color: "tw-bg-blue-cardbluelight",
      code: "clientes",
      icon: "pi pi-users"
    },
    {
      type: 'OPERADORES',
      number: 1,
      color: "tw-bg-red-cardredlight",
      code: "operadores",
      icon: "pi-users"
    },
    {
      type: 'VENDEDOR',
      number: 2,
      color: "tw-bg-blue-cardbluelight",
      code: "vendedor",
      icon: "pi-comment"
    },
    {
      type: 'ENCARGADO DE CUENTA',
      number: 2,
      color: "tw-bg-red-cardred",
      code: "encargado",
      icon: "pi-user-edit"
    },
  ]