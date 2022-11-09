import React from 'react'

interface ApplicationItemProps {
    icon: string,
    name: string,
}
export const ApplicationItem = ({
    icon,
    name
}: ApplicationItemProps) => {
    return (

        <button className='hover:hub-bg-gray-hub-back hub-w-24 hub-rounded-md hub-p-2 flex flex-column hub-justify-center hub-items-center hub-gap-1'>
            <img src={icon} alt={name} className='hub-h-12 hub-w-12'/>
            <p className='hub-text-sm'>{name}</p>
        </button>


    )
}
