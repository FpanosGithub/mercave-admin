import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {Cambiadores} from '@/verceldb/schema/cambiadores'


export async function GET(request: Request) {
  const cambiadores = await verceldb.select().from(Cambiadores) 
  return NextResponse.json(cambiadores)
}