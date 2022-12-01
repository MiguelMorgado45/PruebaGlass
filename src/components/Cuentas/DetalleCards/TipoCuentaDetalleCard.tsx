import '../../../styles/cuentas.css'

interface TipoCuentaCardProps {
  type: string,
  number: number
  message: string,
  color: string,
  icon:string
}

export const TipoCuentaDetalleCard = ({
  type,
  message,
  number,
  color,
  icon,
}: TipoCuentaCardProps) => {
  return (
    <div className='tw-w-3/12 tw-bg-white cuentas-card tw-px-6 tw-py-3'>
      <div className='flex flex-row tw-justify-between'>
        <div className='flex flex-column tw-font-bold tw-h-16 tw-justify-between'>
          <div className='tw-text-gray-grayt tw-text-sm'>{type}</div>
          <div className={`${number === 1 ? "tw-text-4xl" : "tw-text-base tw-font-normal"}`}>{message}</div>
        </div>
        <div className={`flex tw-justify-center tw-items-center tw-w-16 tw-h-16 ${color} tw-rounded-2xl`}>
          <i className={`pi ${icon}`} style={{ fontSize: '1.5rem' }}></i>
        </div>

    </div>
    </div >
  )
}

