import { Menus } from './components/Menus';

export const TopNav = () => {
   return (
      <div>
         <div className='tw-h-auto tw-w-full  flex justify-content-between align-content-center tw-bg-white tw-px-6 tw-py-2 tw-transition-all'>
            <div className='flex tw-items-center'>
               <p className={`tw-transition-all tw-text-lg tw-text-blue-tw-glass-logo`}>TW<span className='tw-font-bold'>GLASS®</span></p>
            </div>
            <Menus />
         </div >
      </div>

   );
}