import { useState, useEffect} from 'react'

import { useFormik } from 'formik';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { FormCardTemplate } from '../../../templates/FormCardTemplate/FormCardTemplate';
import { rolesOperadores } from '../../../data/dataOperadores';


export const RolesCard = () => {

  const [selectedCuentas, setSelectedCuentas] = useState(null);

  const formik = useFormik({
    initialValues: { selected: selectedCuentas},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;
  const reset = () => {
    handleReset();
    setSelectedCuentas(null);

  }

  useEffect(() => {
    setFieldValue("selected", selectedCuentas)
  }, [selectedCuentas])

  return (
    <FormCardTemplate titulo='Asignar Roles'>
      <form onSubmit={handleSubmit} className="flex flex-column gap-4 tw-items-end" id='Roles'>
        
        <div className="tw-w-full">
          <DataTable value={rolesOperadores} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id" name='selected'>
            <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
            <Column field="rol" header="Rol" ></Column>
            <Column field="descr" header="Descripción" ></Column>
          </DataTable>
        </div>

        <div className='flex tw-justify-end tw-w-full gap-4'>
            <button type='reset'
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-bg-gray-200 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-gray-600`} onClick={reset}>
              Cancelar
            </button>
            <button type="submit"
              className={`tw-text-sm tw-w-40 tw-font-semibold tw-border-blue-600 tw-border-2 tw-h-fit
              tw-px-4 tw-py-3 tw-rounded-md tw-text-blue-600 hover:tw-bg-blue-100`}>
              Agregar
            </button>
          </div>
      </form>

    </FormCardTemplate>
  )
}
