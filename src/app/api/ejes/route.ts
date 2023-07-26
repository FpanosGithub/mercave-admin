import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {EAVMs} from '@/verceldb/schema/EAVMs'


export async function GET(request: Request) {
  const ejes = await verceldb.select().from(EAVMs) 
  return NextResponse.json(ejes)
}