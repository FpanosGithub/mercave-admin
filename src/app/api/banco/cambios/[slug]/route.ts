import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {CambiosBanco} from '@/verceldb/schema/EAVMs'
import { eq } from 'drizzle-orm';


export async function GET(request: Request) {
  
  const segments = request.url.split('/')
  const last = segments.length -1
  const slug = segments[last]
  const cambiador = await verceldb.select().from(CambiosBanco).where(eq(CambiosBanco.fichero, slug));
  return NextResponse.json(cambiador)
}