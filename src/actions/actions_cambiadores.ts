'use server'
import { eq } from "drizzle-orm"
import { verceldb } from "@/verceldb/drizzle.client"
import { revalidateTag } from 'next/cache'
import { Cambiadores, VersionesCambiadores } from "@/verceldb/schema/cambiadores"

export async function deleteCambiador(codigo:string) {
  await verceldb.delete(Cambiadores).where(eq(Cambiadores.codigo, codigo))
}

export async function addCambiador (data:FormData){
  const codigo = data.get('codigo') as string
  const tipo = data.get('tipo') as "Experimental" | "Comercial" | null | undefined
  const version = data.get('version') as string
  const desc = data.get('desc') as string | null | undefined
  await verceldb.insert(Cambiadores).values({codigo:codigo, tipo:tipo, version:version, desc: desc,})
  revalidateTag('cambiadores')
}

export async function editCambiador (data:FormData){
  const codigo = data.get('codigo') as string
  const tipo = data.get('tipo') as "Experimental" | "Comercial" | null | undefined
  const version = data.get('version') as string 
  const desc = data.get('desc') as string
  const fabricante = data.get('fabricante') as string
  const fecha_fab = data.get('fecha_fab') as string
  const ultimo_mant =  data.get('ultimo_mant') as string
  const prox_mant =  data.get('prox_mant') as string
  const mant =  data.get('mant') as boolean | null | undefined
  const al_operacion = data.get('al_operacion') as boolean | null | undefined
  const al_cambiador =  data.get('fecha_fab') as boolean | null | undefined
  const num_cambios =  data.get('fecha_fab') as number | null | undefined

  await verceldb.update(Cambiadores)
  .set({
    codigo,
    tipo,
    version,
    desc,
    fabricante,
    fecha_fab,
    ultimo_mant,
    prox_mant,
    mant,
    al_operacion,
    al_cambiador,
    num_cambios,
    }
    )
  .where(eq(Cambiadores.codigo, codigo))
}

export async function deleteVersionCambiador(codigo:string) {
  await verceldb.delete(VersionesCambiadores).where(eq(VersionesCambiadores.codigo, codigo))
  revalidateTag('versiones_cambiadores')
}

export async function addVersionCambiador (data:FormData){
  const codigo = data.get('codigo') as string
  const descripcion = data.get('descripcion')
  const imagen = data.get('imagen')
  await verceldb.insert(VersionesCambiadores)
  .values({codigo, descripcion, imagen,})
  revalidateTag('versiones_cambiadores')
}

export async function editVersionCambiador (data:FormData){
  const codigo = data.get('codigo') as string
  const descripcion = data.get('descripcion') as string
  const longitud = data.get('longitud') as string | null | undefined
  const num_cuerpos = data.get('num_cuerpos') as number | null | undefined
  const imagen = data.get('imagen') as string | null
  
  await verceldb.update(VersionesCambiadores)
  .set({codigo, descripcion, longitud, num_cuerpos, imagen,})
  .where(eq(VersionesCambiadores.codigo, codigo))
}

