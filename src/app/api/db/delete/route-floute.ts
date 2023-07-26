import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
// Importación de Tablas de la db
import {EAVMs, TiposEAVMs} from '@/verceldb/schema/EAVMs'
import {TiposVehiculos, Vehiculos} from '@/verceldb/schema/vehiculos'


export async function GET(request: Request) {
  
  // Borrar EAVMs
  await verceldb.delete(EAVMs)
  // Borrar Vehiculos
  await verceldb.delete(Vehiculos)

  // Borrar tipos de EAVM
  await verceldb.delete(TiposEAVMs)
  // Borrar tipos de Vehiculos
  await verceldb.delete(TiposVehiculos)
  
 return  NextResponse.json({})
}