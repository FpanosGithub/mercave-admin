import { TipoVehiculo } from '@/verceldb/schema/vehiculos';
import FormTipoVehiculo from '@/componentes/FormTipoVehiculo';

async function getTipoVehiculo(codigo:string) {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos/tipos/${codigo}`,  {cache: "no-cache", next: { tags: [codigo],}})
  return await res.json()
}

export default async function page({ params }: { params: { codigo: string } }) {
  const tipo: TipoVehiculo[] = await getTipoVehiculo(params.codigo); 

  return(
    <div className='w-full border border-gray-200 shadow rounded-lg bg-white p-4'>
      <FormTipoVehiculo 
        tipo = {tipo[0]}/>
    </div>
  )
}

