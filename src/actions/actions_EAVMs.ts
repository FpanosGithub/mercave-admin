'use server'
import { eq } from "drizzle-orm"
import { CambiosBanco, EAVMs, TiposEAVMs } from "@/verceldb/schema/EAVMs"
import { verceldb } from "@/verceldb/drizzle.client"
import { revalidateTag } from 'next/cache'

export async function deleteEAVM(codigo:string) {
  await verceldb.delete(EAVMs).where(eq(EAVMs.codigo, codigo))
}

export async function addEAVM (data:FormData){
  const codigo = data.get('codigo') as string
  const tipo = data.get('tipo')
  const vehiculo = data.get('vehiculo')

  await verceldb.insert(EAVMs).values({codigo:codigo, tipo:tipo, vehiculo:vehiculo})
  revalidateTag('ejes')
}

export async function editEAVM (data:FormData){
  const codigo = data.get('codigo') as string
  const tipo = data.get('tipo') as string
  const vehiculo = data.get('vehiculo') as string
  const fabricante = data.get('fabricante') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const owner = data.get('owner') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const keeper = data.get('keeper') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const EEM = data.get('EEM') as "TRIA" | "ADIF" | "VGS" | "BV" | "MANFEV" | null | undefined
  const servicio = data.get('servicio') as boolean | null | undefined
  const observaciones = data.get('observaciones') as string | null | undefined
  //const prox_mant = data.get('prox_mant') as string | null | undefined
  const cir = data.get('cir') as boolean | null | undefined
  const mant = data.get('mant') as boolean | null | undefined
  const al_temp = data.get('al_temp') as boolean | null | undefined
  const al_mant = data.get('al_temp') as boolean | null | undefined
  const al_acel = data.get('al_acel') as boolean | null | undefined
  const al_camb = data.get('al_camb') as boolean | null | undefined
  const tempa = data.get('tempa')
  const tempb = data.get('tempb')
  const lng = data.get('lng')
  const lat = data.get('lat')
  const num_cambios = data.get('num_cambios')
  const km_totales = data.get('km_totales')
  const coef_trabajo = data.get('coef_trabajo')

  await verceldb.update(EAVMs)
  .set({
    codigo,
    tipo,
    vehiculo,
    fabricante,
    owner,
    keeper,
    EEM,
    servicio,
    observaciones,
    //prox_mant,
    cir,
    mant,
    al_temp,
    al_mant,
    al_acel,
    al_camb,
    tempa,
    tempb,
    lng,
    lat,
    num_cambios,
    km_totales,
    coef_trabajo
    }
    )
  .where(eq(EAVMs.codigo, codigo))
}

export async function deleteTipoEAVM(codigo:string) {
  await verceldb.delete(TiposEAVMs).where(eq(TiposEAVMs.codigo, codigo))
  revalidateTag('tipos_ejes')
}

export async function addTipoEAVM (data:FormData){
  const codigo = data.get('codigo') as string
  const anchos = data.get('anchos')
  const imagen = data.get('imagen')

  await verceldb.insert(TiposEAVMs).values({
    codigo:codigo, 
    anchos:anchos, 
    imagen:imagen
  })
  revalidateTag('tipos_ejes')
}

export async function editTiposEAVM (data:FormData){
  const codigo = data.get('codigo') as string
  const anchos = data.get('anchos') as 'UIC-IB'|'UIC-RUS'|'UIC-RUS-IB'|'METR-UIC'|'UIC'|'IB' | null | undefined
  const imagen = data.get('imagen') as string | null | undefined
  
  await verceldb.update(TiposEAVMs)
  .set({
    codigo,
    anchos,
    imagen,
    }
    )
  .where(eq(TiposEAVMs.codigo, codigo))
}

export async function deleteCambiador(fichero:string) {
  await verceldb.delete(CambiosBanco).where(eq(CambiosBanco.fichero, fichero))
  revalidateTag('cambiadores')
}

export async function addCambiador(data:FormData) {
  const fichero = data.get('fichero') as string
  const sentido = data.get('sentido')
  const EAVM = data.get('EAVM')

  await verceldb.insert(CambiosBanco).values({
    fichero : fichero,
    sentido : sentido,
    EAVM : EAVM
  })
  revalidateTag('cambiadores')
}

export async function editCambiador(data:FormData) {
  
}