import { Button } from 'primereact/button'
import { notifications } from '../../data/data'
import React from 'react'

interface NotificationProps {
  title?: string,
  desc?: string,
  date?: string,
}

export const NotificationItem = ({
  title,
  desc,
  date,
}: NotificationProps) => {

  return (
    <>
      <div className='hover:glass-bg-grayl glass-rounded-md flex gap-3 glass-mx-3 glass-mt-2 glass-p-2 glass-items-center'>
        <Button icon="pi pi-bell" className="p-button-rounded" aria-label="Notification" />
        <button className='flex flex-column glass-w-36 glass-text-left'>
          <p className='glass-font-semibold glass-text-sm'>{title}</p>
          <p className=' glass-text-sm'>{desc}</p>
          <p className='glass-text-grayt glass-text-xs '>{date}</p>
        </button>
      </div>
      <hr className='glass-text-grayl glass-mx-3' />
    </>

  )
}
