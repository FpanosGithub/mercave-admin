import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {CambiosBanco} from '@/verceldb/schema/EAVMs'


export async function GET(request: Request) {
  const cambios = await verceldb.select().from(CambiosBanco) 
  return NextResponse.json(cambios)
}