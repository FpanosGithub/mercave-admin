import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {VersionesCambiadores, Cambiadores} from '@/verceldb/schema/cambiadores'
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const segments = request.url.split('/')
  const last = segments.length -1
  const slug = segments[last]

  const cambiador = await verceldb.select({
    id: Cambiadores.id,
    codigo: Cambiadores.codigo,
    tipo: Cambiadores.tipo,
    version: {
      codigo: VersionesCambiadores.codigo,
      descripcion: VersionesCambiadores.descripcion,
      longitud: VersionesCambiadores.longitud,
      num_cuerpos: VersionesCambiadores.num_cuerpos,
      imagen: VersionesCambiadores.imagen,
    },
    desc: Cambiadores.desc,
    fabricante: Cambiadores.fabricante,
    fecha_fab: Cambiadores.fecha_fab,
    ultimo_mant: Cambiadores.ultimo_mant,
    prox_mant: Cambiadores.prox_mant,
    mant: Cambiadores.mant,
    al_operacion: Cambiadores.al_operacion,
    al_cambiador: Cambiadores.al_cambiador,
    num_cambios: Cambiadores.num_cambios,
  })
  .from(Cambiadores)
  .where(eq(Cambiadores.codigo, slug))
  .leftJoin(VersionesCambiadores, eq(Cambiadores.version, VersionesCambiadores.codigo))
  return NextResponse.json(cambiador)
}