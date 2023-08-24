import DeleteTipoVehiculo from "@/componentes/DeleteTipoVehiculo"
export default function page({ params }: { params: { codigo: string } }) {
  const codigo = params.codigo
  return (
    <DeleteTipoVehiculo codigo = {codigo}/>
  )
}
