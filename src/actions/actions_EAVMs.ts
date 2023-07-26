'use server'
import { redirect } from 'next/navigation'
import { eq } from "drizzle-orm"
import { EAVMs } from "@/verceldb/schema/EAVMs"
import { verceldb } from "@/verceldb/drizzle.client"
import { revalidateTag } from 'next/cache'

export async function deleteEAVM(codigo:string) {
  await verceldb.delete(EAVMs).where(eq(EAVMs.codigo, codigo))
  revalidateTag('ejes')
}

export async function addEAVM (data:FormData){
  const codigo = data.get('codigo')
  const tipo = data.get('tipo')
  const vehiculo = data.get('vehiculo')

  await verceldb.insert(EAVMs).values({codigo:codigo, tipo:tipo, vehiculo:vehiculo})
  revalidateTag('ejes')

}

export async function editEAVM (data:FormData){
  const codigo = data.get('codigo')
  const tipo = data.get('tipo')
  const vehiculo = data.get('vehiculo')

  //await verceldb.update(EAVMs).values({codigo:codigo, tipo:tipo, vehiculo:vehiculo})
  revalidateTag('ejes')

}