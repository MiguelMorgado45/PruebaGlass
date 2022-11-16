

interface TipoCuentaCardProps {
    type: string,
    number: number,
}
export const TipoClienteCard = ({
    type,
    number,
}:TipoCuentaCardProps) => {
  return (
    <div className='flex tw-items-center gap-4 tw-w-3/12 tw-bg-white cuentas-card tw-px-6 tw-py-3'>
        <div className=" flex tw-justify-center tw-items-center tw-w-16 tw-h-16 tw-bg-green-100 tw-rounded-2xl">
            <i className="pi pi-user" style={{fontSize: '1.5rem'}}></i>
        </div>
        <div className='flex flex-column tw-font-semibold'>
            <div className='tw-text-base'>{type}</div>
            <div className='tw-text-4xl'>{number}</div>
        </div>
    </div>
  )
}
