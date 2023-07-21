import { verceldb } from '@/verceldb/drizzle.client';
import { EAVMs, TiposEAVMs} from '@/verceldb/schema/EAVMs';
import Image from 'next/image';
import RefreshButton from '@/componentes/refresh';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic'
export const revalidate = 0


export default async function page() {
  let ejes;
  let startTime = Date.now();
  try 
  {
    ejes = await verceldb.select({
    id: EAVMs.id,
    codigo: EAVMs.codigo,
    tipo: {
      codigo: TiposEAVMs.codigo,
      anchos: TiposEAVMs.anchos,
      imagen: TiposEAVMs.imagen,
    },
    owner: EAVMs.owner,
    fabricante: EAVMs.fabricante,
    keeper: EAVMs.keeper,
    EEM: EAVMs.EEM,
    vehiculo: EAVMs.vehiculo,
    prox_mant:EAVMs.prox_mant,
    servicio: EAVMs.servicio,
    observaciones: EAVMs.observaciones,
    mant: EAVMs.mant,
    cir: EAVMs.cir,
    al_temp: EAVMs.al_temp,
    al_acel: EAVMs.al_acel,
    al_camb: EAVMs.al_camb,
    al_mant: EAVMs.al_mant,
    tempa: EAVMs.tempa,
    tempb: EAVMs.tempb,
    lng: EAVMs.lng,
    lat: EAVMs.lat,
    num_cambios: EAVMs.num_cambios,
    km_totales: EAVMs.km_totales,
    coef_trabajo: EAVMs.coef_trabajo,
    })
  .from(EAVMs)
  .leftJoin(TiposEAVMs, eq(EAVMs.tipo, TiposEAVMs.codigo))
  ;} 
  catch (e: any) {throw e;}
  const duration = Date.now() - startTime;
  console.log(ejes)
  console.log('EN: ', duration, ' milisegundos')
  return(
    <div className= 'flex flex-wrap gap-2 py-4'>
    {ejes.map((eje)=>
      <div 
        className='border-gray-700 w-52 shadow-lg rounded-lg bg-white p-4 flex flex-col justify-between'
        key = {eje.codigo}>
        <p className='text-center text-xl text-gray-700'> {eje.codigo} </p>
        <p className='text-center text-gray-700'> {eje.tipo?.codigo} </p>
        <p className='text-center text-gray-700'> {eje.keeper} </p>
        <p className='text-center text-gray-700'> {eje.EEM} </p>
      </div>
    )}
    </div>
  )
}
