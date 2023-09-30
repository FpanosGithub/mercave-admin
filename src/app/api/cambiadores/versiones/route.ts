import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {VersionesCambiadores} from '@/verceldb/schema/cambiadores'


export async function GET(request: Request) {
  const versiones = await verceldb.select().from(VersionesCambiadores)
  return NextResponse.json(versiones)
}