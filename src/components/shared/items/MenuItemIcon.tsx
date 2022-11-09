import { NavLink } from 'react-router-dom'

interface ItemProps {
    icon?: string,
    path: string,
    img?: string
}

export const MenuItemIcon = ({
    icon = 'pi pi home',
    path = '',
    img,
}: ItemProps) => {
    return (
        <div className='flex glass-mx-4 glass-my-2 '>
            {
                icon != 'pi-sign-out'
                    ? (<NavLink
                        className={({ isActive }) => {
                            return `glass-w-12 ${isActive ? 'active' : ''} `
                        }}
                        to={`/${path}`}
                    >
                        {img != null
                            ? (<div className='glass-py-3 glass-pl-3'><img src={img} alt={path} className={`glass-h-5 glass-w-5 glass-opacity-60`} /></div>)
                            : (<i className={`${icon} glass-py-3 glass-pl-4 glass-text-base`}></i>)}

                    </NavLink>)
                    : (<div className=''>{img != null
                        ? (<div className='glass-py-3 glass-pl-3'><img src={img} alt={path} className={`glass-h-5 glass-w-5 glass-opacity-60`} /></div>)
                        : (<i className={`${icon} glass-py-3 glass-pl-4 glass-text-base`}></i>)}</div>)
            }

        </div>
    )
}
