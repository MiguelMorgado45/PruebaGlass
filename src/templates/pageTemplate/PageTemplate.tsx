import { LeftMenu } from "../../components/shared/leftMenu/LeftMenu"
import { TopNav } from "../../components/shared/topNav/TopNav"
import AppRouter from "../../router/AppRouter"


const PageTemplate = () => {

    return (
        <div className='flex glass-transition-all'>
            <div className=''>
                <LeftMenu />
            </div>

            <div className=' glass-w-full glass-bg-gray-glass-back'>
                <TopNav />
                <div className=' glass-mx-8 glass-my-6'>
                    <AppRouter />
                </div>
            </div>
        </div>
    )
}

export default PageTemplate
