import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import { TiposVehiculos } from '@/verceldb/schema/vehiculos';


export async function GET(request: Request) {
  const tipos_vehiculos = await verceldb.select().from(TiposVehiculos)
  return NextResponse.json(tipos_vehiculos)
}