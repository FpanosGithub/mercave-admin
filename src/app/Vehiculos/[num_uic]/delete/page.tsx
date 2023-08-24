import DeleteVehiculo from "@/componentes/DeleteVehiculo"
export default function page({ params }: { params: { num_uic: string } }) {
  
  const num_uic = params.num_uic
  
  return (
    <DeleteVehiculo num_uic = {num_uic}/>
  )
}
