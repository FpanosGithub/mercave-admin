import DeleteEAVM from "@/componentes/DeleteEAVM"
export default function page({ params }: { params: { codigo: string } }) {
  
  const codigoEAVM = params.codigo
  
  return (
    <DeleteEAVM codigo = {codigoEAVM}/>
  )
}
