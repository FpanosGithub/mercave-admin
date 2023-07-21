import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import {verceldb} from '@/verceldb/drizzle.client'
import {EAVMs, TiposEAVMs} from '@/verceldb/schema/EAVMs'


export async function GET(request: Request) {
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
  }
  ).from(EAVMs).leftJoin(TiposEAVMs, eq(EAVMs.tipo, TiposEAVMs.codigo)) 

return NextResponse.json(ejes)
}