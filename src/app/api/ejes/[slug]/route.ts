import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {EAVMs} from '@/verceldb/schema/EAVMs'
import { eq } from 'drizzle-orm';


export async function GET(request: Request) {
  
  const segments = request.url.split('/')
  const last = segments.length -1
  const slug = segments[last]
  const eje = await verceldb.select().from(EAVMs).where(eq(EAVMs.codigo, slug));
  return NextResponse.json(eje)
}