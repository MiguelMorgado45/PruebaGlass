import { useRef } from "react";

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Menu } from 'primereact/menu';

import { menuItems } from '../../../../helpers/menuItems';
import user from '../../../../assets/user.png'

export const Menus = () => {

   const userMenu = useRef<any>(null);
   const applicationMenu = useRef<any>(null);
   const notificationMenu = useRef<any>(null);

   const { notificationItems, userItem } = menuItems();

   const buttons = () => (
      <div className='flex align-items-center justify-content-between tw-gap-4'>
         {/* Botón de Notificaciones */}
         <div className='flex align-items-center tw-text-base tw-font-normal tw-text-orangetw' >
            @nancy.cruz
         </div>
         <Menu model={notificationItems} popup ref={notificationMenu} id="popup_notificationMenu" />
         <button className=' tw-w-5' onClick={(event) => (notificationMenu.current?.toggle(event))} aria-controls="popup_notificationMenu" aria-haspopup>
            <i className="pi pi-bell tw-text-xl tw-relative"><Badge></Badge></i>
         </button>
         {/* Botón de Usuario */}
         {/* <Menu model={userItem} popup ref={userMenu} id="popup_userMenu" /> */}
         <button className='flex align-items-center' onClick={(event) => (userMenu.current?.toggle(event))} aria-controls="popup_userMenu" aria-haspopup>
            <Avatar className='tw-m-auto' image={user} shape='circle' size='large' />
         </button>
      </div >
   )

   return (
      <>
         {buttons()}
      </>
   );
}