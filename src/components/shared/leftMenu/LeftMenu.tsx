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
      <div className={`${leftBarStatus ? 'tw-w-48' : 'tw-w-20'} tw-h-full tw-relative flex flex-column tw-items-center hub tw-transition-all `}>
         <button onClick={ToolBarSetLocalStorage} className='tw-bg-white tw-border-transparent tw-cursor-pointer'><img src={icono} className={`tw-p-2 tw-mb-2 tw-h-16   ${leftBarStatus ? 'tw-w-40' : 'tw-w-16'}`} /></button>
         {
            leftBarStatus 
            ? (<SlideMenu model={letfMenuItems} className='tw-bg-white tw-w-48 tw-border-0 rounded-none ' viewportHeight={670} easing="ease-in" />)
            : (<SlideMenu model={letfMenuItemsIcon} className='tw-bg-white tw-w-20 tw-border-0 rounded-none ' viewportHeight={670} easing="ease-in" />)
         }
         
      </div>

   )
}
