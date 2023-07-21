import { verceldb } from '@/verceldb/drizzle.client';
import { EAVMs, TiposEAVMs } from '@/verceldb/schema/EAVMs';
import Image from 'next/image';
import RefreshButton from '@/componentes/refresh';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic'
export const revalidate = 0


export default async function join_tables() {
  let ejes;
  let startTime = Date.now();
  try {
    const ejes = await verceldb.select({
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
      mant: EAVMs.mant,
      cir: EAVMs.cir,
      tempa: EAVMs.tempa,
      tempb: EAVMs.tempb,
      lng: EAVMs.lng,
      lat: EAVMs.lat,
      num_cambios: EAVMs.num_cambios,
      km_totales: EAVMs.km_totales,
    }).from(EAVMs).leftJoin(TiposEAVMs, eq(EAVMs.tipo, TiposEAVMs.codigo))}
  catch (e: any) {throw e;}
  const duration = Date.now() - startTime;

  return (
    <div className="w-full border border-gray-400 shadow-sm rounded-lg flex justify-between gap-4 p-4  text-gray-800">
      <div className='flex flex-col justify-center text-center text-lg w-32 line-clamp-2'>JOIN VercelDB</div>
      <div className="flex flex-col justify-center text-center text-xl">{} ejes</div>
      <div className="flex flex-col justify-center text-center text-2xl font-semibold">
        <p className='py-4 px-8 border border-rose-600 shadow rounded-lg bg-rose-500 text-white'>{duration} ms</p> 
      </div>
    </div>
  )
}