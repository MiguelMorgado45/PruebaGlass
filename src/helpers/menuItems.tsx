import { NotificationItem, MenuItem, MenuItemIcon } from '../components/shared/items';
import { notifications } from '../data/data';

/*Iconos del Menu*/
import ad from '../assets/icons/anuncios.svg'
import dashboard from '../assets/icons/dashboard.svg'
import products from '../assets/icons/productos.svg'
import exit from '../assets/icons/logout.svg';

export const menuItems = () => {

    const userItem = [
        {
            label: 'Perfil',
            icon: 'pi pi-user',
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
        },
    ];

    const letfMenuItemsIcon = [
        {
            template: () => (

                <MenuItemIcon icon='pi pi-home' img={dashboard} path='dashboard' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-box' path='cuentas' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-building' path='clientes' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-cog' img={products} path='settings' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-users' path='products' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-bell' img={ad} path='news' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-user' path='news' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi pi-tablet' path='news' />
            )
        },
        {
            template: () => (
                <MenuItemIcon icon='pi-sign-out' img={exit} path='' />
            )
        }
    ];

    const letfMenuItems = [
        {
            template: () => (

                <MenuItem label='Dashboard' icon='pi pi-home' img={dashboard} path='dashboard' />
            )
        },
        {
            template: () => (
                <MenuItem label='Cuentas' icon='pi pi-box' path='cuentas' />
            )
        },
        {
            template: () => (
                <MenuItem label='Clientes' icon='pi pi-building' path='clientes' />
            )
        },
        {
            template: () => (
                <MenuItem label='Contrataciones' icon='pi pi-cog' img={products} path='settings' />
            )
        },
        {
            template: () => (
                <MenuItem label='Operadores' icon='pi pi-users' path='products' />
            )
        },
        {
            template: () => (
                <MenuItem label='Anuncios' icon='pi pi-bell' img={ad} path='news' />
            )
        },
        {
            template: () => (
                <MenuItem label='Perfil' icon='pi pi-user' path='news' />
            )
        },
        {
            template: () => (
                <MenuItem label='Reportes' icon='pi pi-tablet' path='news' />
            )
        },
        {
            template: () => (
                <MenuItem label='Cerrar Sesión' icon='pi-sign-out' img={exit} path='sa' />
            )
        }
    ];



    const notificationItems = notifications.map((not) => {
        return ({
            template: () => (

                <NotificationItem date={not.date} title={not.title} desc={not.desc} key={not.title} />
            )
        })
    });

    const cuentasItems = [
        {
            icon: 'pi pi-briefcase',
            label: 'Generales',
            command: (event: any) => {
                window.location.hash = "Generales";
            }
        },
        {
            icon: 'pi pi-user',
            label: 'Contacto',
            command: (event: any) => {
                window.location.hash = "Contacto";
            }
        },

    ];

    return {
        letfMenuItems,
        notificationItems,
        userItem,
        letfMenuItemsIcon,
        cuentasItems
    }
}