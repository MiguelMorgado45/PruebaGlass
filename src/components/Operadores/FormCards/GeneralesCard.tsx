import { RecoilState, useRecoilValue } from 'recoil';
import { operadorCardFormState } from '../../../atoms/FormAtoms';
import { operadorDetalleFormState } from '../../../atoms/OperadorAtom';
import { CardTemplate } from '../../../templates/CardTemplate/CardTemplate'
import { DropdownField, InputTextareaField, InputTextField } from '../../shared/inputFields'

interface RolesGeneralProps {
    nombre: string,
    descr: string
}

export const GeneralesCard = ({ nombre, descr }: RolesGeneralProps) => {
    return (
        <CardTemplate name='GENERALES'>
            <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-4 tw-w-full">
                    <div className="flex flex-column gap-1 tw-w-full">
                        <label className="tw-font-semibold">Nombre</label>
                        <label className="tw-font-extralight">{nombre}</label>
                    </div>
                </div>
                <div className="flex flex-row gap-4 tw-w-full">
                    <div className="flex flex-column gap-1 tw-w-full">
                        <label className="tw-font-semibold">Descripción</label>
                        <label className="tw-font-extralight">{descr}</label>
                    </div>
                </div>
            </div>
        </CardTemplate >
    )
}
