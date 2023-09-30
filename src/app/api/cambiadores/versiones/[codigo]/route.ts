import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {VersionesCambiadores} from '@/verceldb/schema/cambiadores'
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const segments = request.url.split('/')
  const last = segments.length -1
  const slug = segments[last]
  const version = await verceldb.select()
  .from(VersionesCambiadores)
  .where(eq(VersionesCambiadores.codigo, slug))
  return NextResponse.json(version)
}