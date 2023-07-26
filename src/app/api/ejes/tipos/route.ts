import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {TiposEAVMs} from '@/verceldb/schema/EAVMs'


export async function GET(request: Request) {
  const tipos_ejes = await verceldb.select().from(TiposEAVMs)
  return NextResponse.json(tipos_ejes)
}