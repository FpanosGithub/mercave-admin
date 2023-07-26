import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {Vehiculos} from '@/verceldb/schema/vehiculos'


export async function GET(request: Request) {
  const vehiculos = await verceldb.select().from(Vehiculos) 
  return NextResponse.json(vehiculos)
}