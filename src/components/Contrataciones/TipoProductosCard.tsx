import { Card } from 'primereact/card'

interface TipoCuentaCardProps {
  name: string,
  descr: string,
  number: number,
  img: string,
}
export const TipoProductosCard = ({
  name,
  descr,
  number,
  img,
}: TipoCuentaCardProps) => {
  return (
    <div className='tw-h-56 tw-pt-4 flex tw-items-center'>
      <div className='tw-shadow-xl tw-rounded-2xl tw-bg-white tw-w-52 tw-h-40 tw-pt-12 tw-pb-6 flex flex-column tw-items-center tw-justify-center'>
        <img src={img}
          className='tw-w-16 tw-h-16 tw-absolute -tw-translate-y-24 '
        />
        <p className='tw-font-semibold tw-text-lg'>{name}</p>
        <p className='tw-font-normal tw-text-sm tw-text-gray-300'>{descr}</p>
        <p className='tw-font-extrabold tw-text-4xl tw-mt-1'>{number}</p>

      </div>
    </div>

  )
}
