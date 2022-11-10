import { Outlet } from "react-router-dom"
import { LeftMenu } from "../../components/shared/leftMenu/LeftMenu"
import { TopNav } from "../../components/shared/topNav/TopNav"

const PageTemplate = () => {

    return (
        <div className='flex glass-transition-all'>
            <div className=''>
                <LeftMenu />
            </div>
            <div className=' glass-w-full glass-bg-gray-glass-back'>
                <TopNav />
                <div className=' glass-mx-8 glass-my-6'>
                    <Outlet></Outlet> 
                </div>
            </div>
        </div>
    )
}

export default PageTemplate
