import { NextResponse } from 'next/server';
import {verceldb} from '@/verceldb/drizzle.client'
import {CambiosBanco, NewCambioBanco, TotalesBanco, ValorCambioBanco, ValoresBancoEAVM, ValoresBancoEAVMs, ValoresCambiosBanco, ValoresTotalesBanco} from '@/verceldb/schema/EAVMs'
import { CalcularValoresEAVM, CalcularValoresBanco } from '@/lib/FuncionesBanco';

export async function POST(request: Request) {
  const mensaje = await request.json()
  const cambio = {
    dt: mensaje.dt,
    fichero: mensaje.fichero,
    EAVM: mensaje.EAVM,
    V: mensaje.V,
    FV: mensaje.FV,
    sentido: mensaje.sentido,
    alarma: Boolean(mensaje.alarma)
  }
  // Guardamos el cambio en la base de datos y obtenemos el cambio completo con su ID guardado en la base de datos
  const new_cambio = await verceldb
  .insert(CambiosBanco)
  .values(cambio)
  .returning()
  
  // ValoresCambioBanco => cambio, ms, rueda, etapa, f, pos
  // Recorremos cada valor, calculamos los agregados (max, min med, etc)
  mensaje.valores_cambio.map(async (valor:ValorCambioBanco)=>{
    // Guardamos el valor en la BD
    const new_valor = await verceldb
    .insert(ValoresCambiosBanco)
    .values({
      cambio:new_cambio[0].id,
      ms: valor.ms,
      rueda: valor.rueda,
      etapa: valor.etapa,
      f: valor.f,
      pos: valor.pos,
      })
    .returning()
  })

  // Procesamos los valores agregados del EAVM y Totales del Banco y los guardamos
  const valores_EAVM = await CalcularValoresEAVM(
    mensaje.EAVM as string, 
    mensaje.valores_cambio)
  const valores_BANCO =await CalcularValoresBanco(
    mensaje.valores_cambio)

  //!!!!!!!!!
  console.log('GUARDADOS DATOS DE UN CAMBIO EN BANCO DE ENSAYOS.')
  console.log('Valores acumulados EAVM: ', valores_EAVM)
  console.log('Valores acumulados Banco de ensayos: ', valores_BANCO)
  //!!!!!!!!!

  return NextResponse.json({})
}