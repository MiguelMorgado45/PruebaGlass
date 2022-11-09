import { Menus } from './components/Menus';

export const TopNav = () => {
   return (
      <div>
         <div className='glass-h-auto glass-w-full  flex justify-content-between align-content-center glass-bg-white glass-px-6 glass-py-2 glass-transition-all'>
            <div className='flex glass-items-center'>
               <p className={`glass-transition-all glass-text-lg glass-text-blue-tw-glass-logo`}>TW<span className='glass-font-bold'>GLASS®</span></p>
            </div>
            <Menus />
         </div >
      </div>

   );
}