import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { rolesOperadores } from '../../../data/dataOperadores';


export const RolesCard = () => {

  const [selectedCuentas, setSelectedCuentas] = useState(null);

  const formik = useFormik({
    initialValues: { selected: selectedCuentas },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const { handleChange, handleSubmit, handleReset, setFieldValue, values } = formik;

  useEffect(() => {
    setFieldValue("selected", selectedCuentas)
    console.log({values})
  }, [selectedCuentas])

  return (
    <>

      <p className="tw-text-orangetw tw-text-2xl tw-font-semibold w-full">Operador Glass</p>
      <div className="flex flex-column gap-4 tw-items-end" id='Roles'>

        <div className="tw-w-full">
          <DataTable value={rolesOperadores} responsiveLayout="scroll" selection={selectedCuentas} onSelectionChange={e => setSelectedCuentas(e.value)} dataKey="id" name='selected'>
            <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
            <Column field="rol" header="Rol" ></Column>
            <Column field="descr" header="Descripción" ></Column>
          </DataTable>
        </div>

      </div>

    </>
  )
}
