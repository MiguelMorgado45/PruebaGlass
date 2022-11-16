import { ClientesDataTable } from '../../components/Clientes/ClientesDataTable'
import { TipoClienteCard } from '../../components/Clientes/TipoClienteCard'
import { typeCuentas } from '../../data/clientedata'
import { ContentTemplate } from '../../templates/ContentTemplate/ContentTemplate'

export const ClientesPage = () => {
  const title ={
    title: 'Clientes',
    descr: 'Las entidades que representan una razón social y están ligadas a una cuenta.',
    catalog: true
  }
  return (
    <ContentTemplate titleProps={title}>
      <>
        <div className="flex tw-w-full gap-4">
            {
              typeCuentas.map((tipo) => (<TipoClienteCard key={tipo.type} type={tipo.type} number={tipo.number}/>))
            }
            
        </div>
        <ClientesDataTable/>
      </>
    </ContentTemplate>
  )
}
