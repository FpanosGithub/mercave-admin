import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {TiposVehiculos} from '@/verceldb/schema/vehiculos'
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const segments = request.url.split('/')
  const last = segments.length -1
  const slug = segments[last]
  const tipo = await verceldb.select()
  .from(TiposVehiculos)
  .where(eq(TiposVehiculos.codigo, slug))
  return NextResponse.json(tipo)
}