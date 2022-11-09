import { NavLink } from 'react-router-dom'
import React from 'react'

interface ItemProps {
    icon: string,
    label: string,
    path: string,
    img?: string
}

export const MenuItem = ({
    icon = 'pi pi home',
    label = 'Home',
    path = '',
    img,
}: ItemProps) => {
    return (

        <div className='flex glass-mx-4 glass-my-2'>
            {
                label != 'Salir'
                    ? (<NavLink
                        className={({ isActive }) => {
                            return `glass-w-full  glass-rounded-lg ${isActive ? 'active' : 'hover:glass-bg-grayl'} `
                        }}
                        to={`/${path}`}
                    >

                        <div className='flex glass-items-center gap-2 glass-text-sm glass-py-3 glass-pl-3'>
                            {img != null
                                ? (<img src={img} alt={path} className='glass-h-5 glass-w-5 glass-opacity-60' />)
                                : (<i className={`${icon}`}></i>)}
                            <p>{label}</p>
                        </div>
                    </NavLink>)
                    : (<div className='flex glass-items-center gap-2 glass-text-sm glass-py-3 glass-pl-3'>
                        {img != null
                            ? (<img src={img} alt={path} className='glass-h-5 glass-w-5 glass-opacity-60' />)
                            : (<i className={`${icon}`}></i>)}
                        <p>{label}</p>
                    </div>)
            }

        </div>
    )
}
