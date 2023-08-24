import { verceldb } from '@/verceldb/drizzle.client';
import { eq } from 'drizzle-orm';
import { TipoVehiculo, Vehiculo } from '@/verceldb/schema/vehiculos';
import FormVehiculo from '@/componentes/FormVehiculo';

async function getVehiculo(num_uic:string) {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos/${num_uic}`,  {cache: "no-cache", next: { tags: [num_uic],}})
  return await res.json()
}
async function getTiposVehiculos() {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos/tipos`,  { next: { revalidate: 0 } })
  return await res.json()
}
export default async function page({ params }: { params: { num_uic: string } }) {
  const tipos_vehiculos: TipoVehiculo[] = await getTiposVehiculos();
  const vehiculo: Vehiculo[] = await getVehiculo(params.num_uic); 

  return(
    <div className='w-full border border-gray-200 shadow rounded-lg bg-white p-4'>
      <FormVehiculo 
        vehiculo = {vehiculo[0]}
        tipos = {tipos_vehiculos}/>
    </div>
  )
}

