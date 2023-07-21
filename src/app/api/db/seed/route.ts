import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
// Importación de Tablas de la db y tipos de typescript correspondientes a insert
import {EAVMs, TiposEAVMs, NewEAVM, NewTipoEAVM} from '@/verceldb/schema/EAVMs'
import {NewTipoVehiculo, TiposVehiculos, NewVehiculo, Vehiculos} from '@/verceldb/schema/vehiculos'
// Importación de los datos a insertar
import {seedEAVMs, seedTiposEAVMs} from '@/verceldb/seeds/EAVMs'
import {seedVehiculos, seedTiposVehiculos} from '@/verceldb/seeds/vehiculos'


export async function GET(request: Request) {
  // Insertar tipos de EAVM
  const insertedTiposEAVMs: NewTipoEAVM[] = await verceldb
  .insert(TiposEAVMs)
  .values(seedTiposEAVMs)
  .returning()
  // Insertar tipos de vehiculos
  const insertedTiposVehiculos: NewTipoVehiculo[] = await verceldb
  .insert(TiposVehiculos)
  .values(seedTiposVehiculos)
  .returning()
  // Insertar EAVMs
  const insertedEAVMs: NewEAVM[] = await verceldb
  .insert(EAVMs)
  .values(seedEAVMs)
  .returning()
  // Insertar Vehículos
  const insertedVehiculos: NewVehiculo[] = await verceldb
  .insert(Vehiculos)
  .values(seedVehiculos)
  .returning()
return {
  insertedTiposEAVMs,
  insertedEAVMs,
  insertedTiposVehiculos,
  insertedVehiculos,
}
}