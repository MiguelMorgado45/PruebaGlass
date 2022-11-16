

interface TipoCuentaCardProps {
    type: string,
    number: number,
}
export const TipoOperadorCard = ({
    type,
    number,
}:TipoCuentaCardProps) => {
  return (
    <div className='flex tw-items-center gap-4 tw-w-3/12 tw-bg-orange-600 operador-card tw-px-6 tw-py-3'>
        <div className='flex flex-column tw-font-semibold'>
            <div className='tw-text-base tw-text-white'>{type}</div>
            <div className='tw-text-4xl tw-text-white'>{number}</div>
        </div>
    </div>
  )
}
