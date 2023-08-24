import { verceldb } from '@/verceldb/drizzle.client';
import { eq } from 'drizzle-orm';
import { EAVM, EAVMs, TipoEAVM} from '@/verceldb/schema/EAVMs';
import { Vehiculo } from '@/verceldb/schema/vehiculos';
import FormEAVM from '@/componentes/FormEAVM';

async function getEje(codigo:string) {
  const res = await fetch(`${process.env.APP_URL}/api/ejes/${codigo}`,  {cache: "no-cache", next: { tags: ['vehiculos'],}})
  return await res.json()
}
async function getTiposEjes() {
  const res = await fetch(`${process.env.APP_URL}/api/ejes/tipos`,  { next: { revalidate: 0 } })
  return await res.json()
}
async function getVehiculos() {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos`,{cache: "no-cache", next: { tags: ['vehiculos'],}})
  return await res.json()
}

export default async function page({ params }: { params: { codigo: string } }) {

  const eje = await verceldb.select().from(EAVMs).where(eq(EAVMs.codigo, params.codigo));
  const tipos_ejes: TipoEAVM[] = await getTiposEjes();
  const lista_tipos: string[] = tipos_ejes.map((tipo) => tipo.codigo) 
  const vehiculos: Vehiculo[] = await getVehiculos(); 
  const lista_vehiculos: string[] = vehiculos.map((vehiculo) => vehiculo.num_uic)

  console.log(eje[0])
  console.log(lista_tipos)
  console.log(lista_vehiculos)

  return(
    <>
    <div className='w-full border border-gray-200 shadow rounded-lg bg-white p-4'>
      <FormEAVM 
        eje = {eje[0]}
        tipos = {lista_tipos}
        vehiculos = {lista_vehiculos}/>
    </div>
    </>
  )
}

