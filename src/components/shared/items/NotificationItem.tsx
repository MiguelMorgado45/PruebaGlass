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
      <div className='hover:tw-bg-grayl tw-rounded-md flex gap-3 tw-mx-3 tw-mt-2 tw-p-2 tw-items-center'>
        <Button icon="pi pi-bell" className="p-button-rounded" aria-label="Notification" />
        <button className='flex flex-column tw-w-36 tw-text-left'>
          <p className='tw-font-semibold tw-text-sm'>{title}</p>
          <p className=' tw-text-sm'>{desc}</p>
          <p className='tw-text-grayt tw-text-xs '>{date}</p>
        </button>
      </div>
      <hr className='tw-text-grayl tw-mx-3' />
    </>

  )
}
