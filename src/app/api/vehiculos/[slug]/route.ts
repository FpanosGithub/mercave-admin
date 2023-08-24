import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {TiposVehiculos, Vehiculos} from '@/verceldb/schema/vehiculos'
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const segments = request.url.split('/')
  const last = segments.length -1
  const slug = segments[last]
  const vehiculo = await verceldb.select({
    id: Vehiculos.id,
    num_uic:  Vehiculos.num_uic,
    tipo: {
      codigo: TiposVehiculos.codigo,
      clase: TiposVehiculos.clase,
      descripcion: TiposVehiculos.descripcion,
      marca: TiposVehiculos.marca,
      modelo: TiposVehiculos.modelo,
      tipo_uic: TiposVehiculos.tipo_uic,
      serie_uic: TiposVehiculos.serie_uic,
      imagen: TiposVehiculos.imagen,
    },
    descripcion: Vehiculos.descripcion,
    owner: Vehiculos.owner  ,
    keeper: Vehiculos.keeper,
    fabricante: Vehiculos.fabricante,
    fecha_fab: Vehiculos.fecha_fab,
    EEM: Vehiculos.EEM,
    ultimo_mant: Vehiculos.ultimo_mant,
    prox_mant: Vehiculos.prox_mant,
    km_mant: Vehiculos.km_mant,
    nivel_mant: Vehiculos.nivel_mant,
    servicio: Vehiculos.servicio,
    observaciones: Vehiculos.observaciones,
    mant: Vehiculos.mant,
    cir: Vehiculos.cir,
    nudo: Vehiculos.nudo,
    transmitiendo: Vehiculos.transmitiendo,
    al_circ: Vehiculos.al_circ,
    al_mant: Vehiculos.al_mant,
    ultimo_evento: Vehiculos.ultimo_evento,
    vel: Vehiculos.vel,
    lng: Vehiculos.lng,
    lat: Vehiculos.lat,
    km_totales:Vehiculos.km_totales
  })
  .from(Vehiculos)
  .where(eq(Vehiculos.num_uic, slug))
  .leftJoin(TiposVehiculos, eq(Vehiculos.tipo, TiposVehiculos.codigo))
  return NextResponse.json(vehiculo)
}