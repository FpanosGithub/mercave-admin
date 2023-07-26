import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {EAVMs} from '@/verceldb/schema/EAVMs'
import { eq } from 'drizzle-orm';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let codigo = ''
  try {const codigo = searchParams.get('codigo')?.toString()}
  catch {}
  const eje = await verceldb.select().from(EAVMs).where(eq(EAVMs.codigo, codigo));
  return NextResponse.json(eje)
}