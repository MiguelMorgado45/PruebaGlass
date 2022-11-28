import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { rolesOperadores } from '../../../data/dataOperadores';
import { RecoilState, useRecoilValue } from 'recoil';
import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { operadorDetalleFormState } from '../../../atoms/OperadorAtom';


export const RolesCard = () => {

  const [selectedCuentas, setSelectedCuentas] = useState(false)

  const atomState: RecoilState<{}> = operadorDetalleFormState;
  const formikOperadorDetalle = useRecoilValue<any>(operadorDetalleFormState);

  const { setFieldValue, values }: any = formikOperadorDetalle;

  useEffect(() => {
    setFieldValue("selected", selectedCuentas)
  }, [selectedCuentas])

  return (
    <>
      <FormCardTemplate titulo='Asignar Roles'>
        <div className="tw-w-full">
          <DataTable value={rolesOperadores} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id" name='selected'>
            <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
            <Column field="rol" header="Rol" ></Column>
            <Column field="descr" header="Descripción" ></Column>
          </DataTable>
        </div>
        <div className='tw-w-full flex tw-justify-end gap-4 tw-mt-4 tw-pt-4'>

          <button type='reset' onClick={() => { formikOperadorDetalle.resetForm() }}
            className={`tw-text-sm tw-w-1/5 tw-font-semibold tw-bg-gray-200 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`}>
            Cancelar
          </button>

          <button type="submit"
            className={`tw-text-sm tw-w-1/5 tw-font-semibold tw-bg-blue-600 tw-h-fit tw-px-4 tw-py-3 tw-rounded-md tw-text-white`}>
            Agregar
          </button>
        </div>
      </FormCardTemplate>
    </>
  )
}
