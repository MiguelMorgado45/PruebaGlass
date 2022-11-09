import { Chip } from 'primereact/chip'

interface ChipProps {
  description: string,
  backgroundColor: string
}
export const ChipContent = ({ description, backgroundColor }: ChipProps) => {

  return (
    <div className={`flex hub-items-center hub-gap-2 hub-text-white ${backgroundColor} hub-w-fit hub-rounded-full hub-h-fit hub-py-1 hub-px-2`}>
      <Chip label='NEW' className='hub-bg-other-orangelight  hub-text-white hub-text-xs hub-font-bold' />
      <p className='hub-text-sm'>{description}</p>
      <i className='pi pi-angle-right'></i>
    </div>
  )
}