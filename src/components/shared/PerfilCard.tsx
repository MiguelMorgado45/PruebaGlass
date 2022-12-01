import { Button } from "primereact/button"

import { CardTemplate } from "../../templates/CardTemplate/CardTemplate"
import Plogo from '../../assets/ProfileLogo.png'

export const PerfilCard = () => {
  return (
    <CardTemplate name="LOGOTIPO" classname="tw-w-full">
      <div className='flex justify-content-center align-items-center flex-column'>
        <img className='tw-rounded-full tw-mb-4' src={Plogo} alt="Profile Photo" />
        <p className='tw-text-sm tw-font-medium tw-text-gray-grayt tw-mb-2'>JPG o PNG no mayor a 1 MB</p>
        <Button className='tw-text-center p-button-secondary tw-text-sm' label='Nueva Imagen'></Button>
      </div>
    </CardTemplate>
  )
}
