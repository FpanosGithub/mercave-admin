import { verceldb } from '@/verceldb/drizzle.client';
import { EAVM } from '@/verceldb/schema/EAVMs';
import Image from 'next/image';
import RefreshButton from '@/componentes/refresh';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic'

async function getEjes() {
  const res = await fetch("http://localhost:3000/api/ejes",  { next: { revalidate: 0 } })
  return await res.json()
}

export default async function route_handler() {
  let startTime = Date.now();
  const ejes:any[] = await getEjes();
  const duration = Date.now() - startTime;

  return (
    <div className="w-full border border-gray-400 shadow-sm rounded-lg flex justify-between gap-4 p-4  text-gray-800">
      <div className='flex flex-col justify-center text-center text-lg w-32 line-clamp-2'>ROUTE HANDLER VercelDB</div>
      <div className="flex flex-col justify-center text-center text-xl">{ejes.length} ejes</div>
      <div className="flex flex-col justify-center text-center text-2xl font-semibold">
        <p className='py-4 px-8 border border-rose-600 shadow rounded-lg bg-rose-500 text-white'>{duration} ms</p> 
      </div>
    </div>
  )
}