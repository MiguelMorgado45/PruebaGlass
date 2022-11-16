import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { rolesOperadores } from '../../../data/dataOperadores';
import { useRecoilValue } from 'recoil';
import { operadorCardFormState } from '../../../atoms/FormAtoms';


export const RolesCard = () => {

  const [selectedCuentas, setSelectedCuentas] = useState<any>(null);
  const formik = useRecoilValue(operadorCardFormState);

  // const formik = useFormik({
  //   initialValues: { selected: selectedCuentas },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // })

  const {  setFieldValue, values }:any = formik;

  useEffect(() => {
    setFieldValue("selected", selectedCuentas)
    console.log({ values })
  }, [selectedCuentas])

  return (
    <>
      <div className="flex flex-column gap-4 tw-items-end tw-mt-8" id='Roles'>
        <p className="tw-text-orangetw tw-text-2xl tw-font-semibold w-full">Asignar Roles</p>
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
