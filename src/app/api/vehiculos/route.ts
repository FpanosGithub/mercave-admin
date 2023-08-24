import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {TiposVehiculos, Vehiculos} from '@/verceldb/schema/vehiculos'
import { eq } from 'drizzle-orm';


export async function GET(request: Request) {
  const vehiculos = await verceldb.select({
    num_uic: Vehiculos.num_uic,
    descripcion: Vehiculos.descripcion,
    tipo:{
      codigo: TiposVehiculos.codigo,
      clase: TiposVehiculos.clase,
      imagen: TiposVehiculos.imagen,
      },
  })
  .from(Vehiculos)
  .leftJoin(TiposVehiculos, eq(Vehiculos.tipo, TiposVehiculos.codigo))
  return NextResponse.json(vehiculos)
}