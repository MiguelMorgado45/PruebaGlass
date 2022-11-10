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
        <div className='flex tw-mx-4 tw-my-2 '>
            {
                icon != 'pi-sign-out'
                    ? (<NavLink
                        className={({ isActive }) => {
                            return `tw-w-12 ${isActive ? 'active' : ''} `
                        }}
                        to={`/${path}`}
                    >
                        {img != null
                            ? (<div className='tw-py-3 tw-pl-3'><img src={img} alt={path} className={`tw-h-5 tw-w-5 tw-opacity-60`} /></div>)
                            : (<i className={`${icon} tw-py-3 tw-pl-4 tw-text-base`}></i>)}

                    </NavLink>)
                    : (<div className=''>{img != null
                        ? (<div className='tw-py-3 tw-pl-3'><img src={img} alt={path} className={`tw-h-5 tw-w-5 tw-opacity-60`} /></div>)
                        : (<i className={`${icon} tw-py-3 tw-pl-4 tw-text-base`}></i>)}</div>)
            }

        </div>
    )
}
