import { InputData } from '../../shared/InputData/InputData';

export const OperadorCard = () => {

  return (
    <>
      <div className="flex flex-column gap-4" id='Operador'>
        <div className="flex flex-column gap-4 tw-items-end" id='Cuenta'>
          <div className="flex flex-row gap-4 tw-w-full">
            <InputData
              type='inputtext'
              label='Nombre:'
              placeholder="Nombre del Operador"
              name='name'

            />
            <InputData
              type="calendar"
              label="Fecha de Alta:"
              placeholder="DD/MM/AAAA"
              name='fechaAlta'

            />
          </div>

          <div className="flex flex-row gap-4 tw-w-full">
            <InputData
              type="email"
              label="Correo/Usuario:"
              placeholder="nombre@dominio.com"
              name='correo'

            />
            <InputData
              type="phone"
              label="Teléfono"
              placeholder="55-0000-0000"
              name='phone'

            />
          </div>

          <InputData
              type="textarea"
              label="Descripción:"
              placeholder="Escribe"
              name='descr'

            />
        </div>
      </div>
    </>
  )
}
