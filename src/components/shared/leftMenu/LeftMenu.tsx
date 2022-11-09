import {useContext} from 'react';

import { SlideMenu } from 'primereact/slidemenu';
import icono from '../../../assets/vite.svg'
import { menuItems } from '../../../helpers/menuItems';
import { LeftBarContext } from '../../../context/LeftBarContext';

export const LeftMenu = () => {

   const { letfMenuItemsIcon, letfMenuItems } = menuItems();
   const {leftBarStatus, setLeftBarStatus} = useContext(LeftBarContext);

   const ToolBarSetLocalStorage = (e:any) => {
         
         setLeftBarStatus(current => !current)
         leftBarStatus ? localStorage.setItem("topBarStatus", "true") : localStorage.setItem("topBarStatus", "false")
   }

   return (
      <div className={`${leftBarStatus ? 'glass-w-48' : 'glass-w-20'} glass-h-full glass-relative flex flex-column glass-items-center hub glass-transition-all `}>
         <button onClick={ToolBarSetLocalStorage} className='glass-bg-white glass-border-transparent glass-cursor-pointer'><img src={icono} className={`glass-p-2 glass-mb-2 glass-h-16   ${leftBarStatus ? 'glass-w-40' : 'glass-w-16'}`} /></button>
         {
            leftBarStatus 
            ? (<SlideMenu model={letfMenuItems} className='glass-bg-white glass-w-48 glass-border-0 rounded-none ' viewportHeight={670} easing="ease-in" />)
            : (<SlideMenu model={letfMenuItemsIcon} className='glass-bg-white glass-w-20 glass-border-0 rounded-none ' viewportHeight={670} easing="ease-in" />)
         }
         
      </div>

   )
}
