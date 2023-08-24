'use server'
import { redirect } from 'next/navigation'
import { eq } from "drizzle-orm"
import { verceldb } from "@/verceldb/drizzle.client"
import { revalidateTag } from 'next/cache'
import { TiposVehiculos, Vehiculos } from '@/verceldb/schema/vehiculos'

export async function deleteVehiculo(num_uic:string) {
  await verceldb.delete(Vehiculos)
  .where(eq(Vehiculos.num_uic, num_uic))
  revalidateTag('vehiculos')
}

export async function addVehiculo (data:FormData){
  const num_uic = data.get('num_uic') as string
  const tipo = data.get('tipo') as string

  await verceldb.insert(Vehiculos)
  .values({
    num_uic,
    tipo,
  })
  revalidateTag('vehiculos')
}

export async function editVehiculo (data:FormData){
  const num_uic = data.get('num_uic') as string
  const tipo = data.get('tipo') as string
  const fabricante = data.get('fabricante') as string | null | undefined
  const owner = data.get('owner') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const keeper = data.get('keeper') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const EEM = data.get('EEM') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const servicio = data.get('servicio') as boolean | null | undefined
  const observaciones = data.get('observaciones') as string | null | undefined
  const cir = data.get('cir') as boolean | null | undefined
  const mant = data.get('mant') as boolean | null | undefined
  const nudo = data.get('nudo') as boolean | null | undefined
  const transmitiendo = data.get('transmitiendo') as boolean | null | undefined
  const al_mant = data.get('al_mant') as boolean | null | undefined
  const al_circ = data.get('al_circ') as boolean | null | undefined
  const lng = data.get('lng') 
  const lat = data.get('lat') 
  const km_totales = data.get('km_totales') 

  await verceldb.update(Vehiculos)
  .set({
    num_uic,
    tipo,
    fabricante,
    owner,
    keeper,
    EEM,
    servicio,
    observaciones,
    cir,
    mant,
    nudo,
    transmitiendo,
    al_mant,
    al_circ,
    lng,
    lat,
    km_totales
    }
    )
  .where(eq(Vehiculos.num_uic, num_uic))
  revalidateTag('vehiculos')
}

export async function deleteTipoVehiculo(codigo:string) {
  await verceldb.delete(TiposVehiculos).where(eq(TiposVehiculos.codigo, codigo))
  revalidateTag('tipos_vehiculos')
}

export async function addTipoVehiculo (data:FormData){
  const codigo = data.get('codigo') as string
  const clase = data.get('clase')
  const descripcion = data.get('descripcion')
  const imagen = data.get('imagen')

  await verceldb.insert(TiposVehiculos).values({
    codigo: codigo, 
    clase: clase,
    descripcion: descripcion,
    imagen: imagen,
  })
  revalidateTag('tipos_vehiculos')
}

export async function editTiposVehiculos (data:FormData){
  const codigo = data.get('codigo') as string
  const clase = data.get('clase') as 'LOC'|'VAG'|'MRA' | null | undefined
  const descripcion = data.get('descripcion') as string
  const marca = data.get('marca') as string
  const modelo = data.get('modelo') as string
  const tipo_uic = data.get('tipo_uic') as string
  const serie_uic = data.get('serie_uic') as string
  const imagen = data.get('imagen') as string

  await verceldb.update(TiposVehiculos)
  .set({
    codigo,
    clase,
    descripcion,
    marca,
    modelo,
    tipo_uic,
    serie_uic,
    imagen,
    })
  .where(eq(TiposVehiculos.codigo, codigo))
  revalidateTag('tipos_vehiculos')
  redirect('Vehiculos/tipos')
}