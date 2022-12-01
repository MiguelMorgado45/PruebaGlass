import { Outlet } from 'react-router-dom'
import { LeftMenu } from '../components/shared/leftMenu/LeftMenu'
import { TopNav } from '../components/shared/topNav/TopNav'

export const GlassNavigationBar = () => {
    return (
        <div className='flex tw-transition-all'>
            <div>
                <LeftMenu />
            </div>
            <div className=' tw-w-full tw-bg-gray-glass-back content-size'>
                <TopNav />
                <div className=' tw-mx-8 tw-my-6'>
                    <Outlet></Outlet> 
                </div>
            </div>
        </div>
    )
}


