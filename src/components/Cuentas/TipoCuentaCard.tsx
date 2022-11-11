import '../../styles/cuentas.css'

interface TipoCuentaCardProps {
    type: string,
    number: number,
}
export const TipoCuentaCard = ({
    type,
    number,
}:TipoCuentaCardProps) => {
  return (
    <div className='tw-w-3/12 tw-bg-blue-bcard cuentas-card tw-px-6 tw-py-3'>
        <div className='flex flex-column tw-font-bold'>
            <div className='tw-text-blue-bcard-t tw-text-base'>{type}</div>
            <div className='tw-text-white tw-text-4xl'>{number}</div>
        </div>
    </div>
  )
}
