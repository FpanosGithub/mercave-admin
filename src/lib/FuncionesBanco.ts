import {verceldb} from '@/verceldb/drizzle.client'
import {CambioBanco, CambiosBanco, NewCambioBanco, TotalesBanco, ValorCambioBanco, ValoresBancoEAVM, ValoresBancoEAVMs, ValoresCambiosBanco, ValoresTotalesBanco} from '@/verceldb/schema/EAVMs'
import { eq } from 'drizzle-orm';

async function ValoresBanco(){
  let valores: ValoresTotalesBanco
  const val_bd: ValoresTotalesBanco[] = await verceldb.select().from(TotalesBanco);
  // Si no existe el registro lo creamos
  if (!val_bd[0]) {
    const val_new: ValoresTotalesBanco [] = await verceldb
    .insert(TotalesBanco)
    .values({num_cambios: 0})
    .returning();
    valores = val_new[0]
  }
  else {
    valores = val_bd[0]
  }
  return valores
}

export async function CalcularValoresBanco(
  valores_cambio:ValorCambioBanco[])
  {
  let valores = await ValoresBanco()
  
  let num_cambios = 1

  let num_val_d = 0
  let num_val_c = 0
  let num_val_e = 0
  
  let fmaxdes1 = 0
  let fmaxdes2 = 0
  let fmaxdes3 = 0
  let fmaxdes4 = 0

  let fmindes1 = 0
  let fmindes2 = 0
  let fmindes3 = 0
  let fmindes4 = 0

  let fmaxcamb1 = 0
  let fmaxcamb2 = 0
  let fmaxcamb3 = 0
  let fmaxcamb4 = 0

  let fmincamb1 = 0
  let fmincamb2 = 0
  let fmincamb3 = 0
  let fmincamb4 = 0

  let fmaxenc1 = 0
  let fmaxenc2 = 0
  let fmaxenc3 = 0
  let fmaxenc4 = 0

  let fminenc1 = 0
  let fminenc2 = 0
  let fminenc3 = 0
  let fminenc4 = 0

  let fmeddes = 0
  let fmedcamb = 0
  let fmedenc = 0

  const POS_D1 = 10
  const POS_D2 = 20
  const POS_D3 = 30
  const POS_D4 = 44
  const POS_C1 = 30
  const POS_C2 = 60
  const POS_C3 = 90
  const POS_C4 = 120
  const POS_E1 = 10
  const POS_E2 = 20
  const POS_E3 = 30
  const POS_E4 = 45

  if (valores.num_cambios) {num_cambios = valores.num_cambios + 1}
  if (valores.fmaxdes1) {fmaxdes1 = parseFloat(valores.fmaxdes1)}
  if (valores.fmaxdes2) {fmaxdes2 = parseFloat(valores.fmaxdes2)}
  if (valores.fmaxdes3) {fmaxdes3 = parseFloat(valores.fmaxdes3)}
  if (valores.fmaxdes4) {fmaxdes4 = parseFloat(valores.fmaxdes4)}
  if (valores.fmindes1) {fmindes1 = parseFloat(valores.fmindes1)}
  if (valores.fmindes2) {fmindes2 = parseFloat(valores.fmindes2)}
  if (valores.fmindes3) {fmindes3 = parseFloat(valores.fmindes3)}
  if (valores.fmindes4) {fmindes4 = parseFloat(valores.fmindes4)}
  if (valores.fmaxcamb1) {fmaxcamb1 = parseFloat(valores.fmaxcamb1)}
  if (valores.fmaxcamb2) {fmaxcamb2 = parseFloat(valores.fmaxcamb2)}
  if (valores.fmaxcamb3) {fmaxcamb3 = parseFloat(valores.fmaxcamb3)}
  if (valores.fmaxcamb4) {fmaxcamb4 = parseFloat(valores.fmaxcamb4)}
  if (valores.fmincamb1) {fmincamb1 = parseFloat(valores.fmincamb1)}
  if (valores.fmincamb2) {fmincamb2 = parseFloat(valores.fmincamb2)}
  if (valores.fmincamb3) {fmincamb3 = parseFloat(valores.fmincamb3)}
  if (valores.fmincamb4) {fmincamb4 = parseFloat(valores.fmincamb4)}
  if (valores.fmaxenc1) {fmaxenc1 = parseFloat(valores.fmaxenc1)}
  if (valores.fmaxenc2) {fmaxenc2 = parseFloat(valores.fmaxenc2)}
  if (valores.fmaxenc3) {fmaxenc3 = parseFloat(valores.fmaxenc3)}
  if (valores.fmaxenc4) {fmaxenc4 = parseFloat(valores.fmaxenc4)}
  if (valores.fminenc1) {fminenc1 = parseFloat(valores.fminenc1)}
  if (valores.fminenc2) {fminenc2 = parseFloat(valores.fminenc2)}
  if (valores.fminenc3) {fminenc3 = parseFloat(valores.fminenc3)}
  if (valores.fminenc4) {fminenc4 = parseFloat(valores.fminenc4)}

  valores_cambio.map((valor: ValorCambioBanco) => {
    let f = 0
    let pos = 0
    if (valor.f) {f = parseFloat(valor.f)}
    if (valor.pos) {pos = parseFloat(valor.pos)}
    if (valor.etapa === 'D'){
      if(pos < 0) {}
      else if (pos < POS_D1){
        if (f > fmaxdes1) {fmaxdes1 = f}
        if (f < fmindes1) {fmindes1 = f}
      }
      else if (pos < POS_D2){
        if (f > fmaxdes2) {fmaxdes2 = f}
        if (f < fmindes2) {fmindes2 = f}
      }
      else if (pos < POS_D3){
        if (f > fmaxdes3) {fmaxdes3 = f}
        if (f < fmindes3) {fmindes3 = f}
      }
      else if (pos < POS_D4){
        if (f > fmaxdes4) {fmaxdes4 = f}
        if (f < fmindes4) {fmindes4 = f}
      }
      fmeddes = (fmeddes * (num_val_d) + f)/(num_val_d + 1)
      num_val_d = num_val_d +1
    }
    if (valor.etapa === 'C'){
      if(pos < 0) {}
      else if (pos < POS_C1){
        if (f > fmaxcamb1) {fmaxcamb1 = f}
        if (f < fmincamb1) {fmincamb1 = f}
      }
      else if (pos < POS_C2){
        if (f > fmaxcamb2) {fmaxcamb2 = f}
        if (f < fmincamb2) {fmincamb2 = f}
      }
      else if (pos < POS_C3){
        if (f > fmaxcamb3) {fmaxcamb3 = f}
        if (f < fmincamb3) {fmincamb3 = f}
      }
      else if (pos < POS_C4){
        if (f > fmaxcamb4) {fmaxcamb4 = f}
        if (f < fmincamb4) {fmincamb4 = f}
      }
      fmedcamb = (fmedcamb * (num_val_c) + f)/(num_val_c + 1)
      num_val_c = num_val_c +1
    }
    if (valor.etapa === 'E'){
      if(pos < 0) {}
      else if (pos < POS_E1){
        if (f > fmaxenc1) {fmaxenc1 = f}
        if (f < fminenc1) {fminenc1 = f}
      }
      else if (pos < POS_E2){
        if (f > fmaxenc2) {fmaxenc2 = f}
        if (f < fminenc2) {fminenc2 = f}
      }
      else if (pos < POS_E3){
        if (f > fmaxenc3) {fmaxenc3 = f}
        if (f < fminenc3) {fminenc3 = f}
      }
      else if (pos < POS_E4){
        if (f > fmaxenc4) {fmaxenc4 = f}
        if (f < fminenc4) {fminenc4 = f}
      }
      fmedenc = (fmedenc * (num_val_e) + f)/(num_val_e + 1)
      num_val_e = num_val_e +1
    }
  });
  // Claculamos los valores medios del BANCO.
  let fmeddesBANCO = 0
  let nueva_fmeddesBANCO = 0
  let fmedcambBANCO = 0
  let nueva_fmedcambBANCO = 0
  let fmedencBANCO = 0
  let nueva_fmedencBANCO = 0
  if (valores.fmeddes) {fmeddesBANCO = parseFloat(valores.fmeddes)}
  if (valores.fmedcamb) {fmedcambBANCO = parseFloat(valores.fmedcamb)}
  if (valores.fmedenc) {fmedencBANCO = parseFloat(valores.fmedenc)}
  nueva_fmedencBANCO = (fmeddesBANCO * (num_cambios -1) + fmeddes) / num_cambios
  nueva_fmedcambBANCO = (fmedcambBANCO * (num_cambios -1) + fmedcamb) / num_cambios
  nueva_fmedencBANCO = (fmedencBANCO * (num_cambios -1) + fmedenc) / num_cambios
  
  const nuevos_valores = await verceldb
  .update(TotalesBanco)
  .set({
    num_cambios: num_cambios,
    fmaxdes1: fmaxdes1.toFixed(2).toString(),
    fmaxdes2: fmaxdes2.toFixed(2).toString(),
    fmaxdes3: fmaxdes3.toFixed(2).toString(),
    fmaxdes4: fmaxdes4.toFixed(2).toString(),
    fmindes1: fmindes1.toFixed(2).toString(),
    fmindes2: fmindes2.toFixed(2).toString(),
    fmindes3: fmindes3.toFixed(2).toString(),
    fmindes4: fmindes4.toFixed(2).toString(),
    fmaxcamb1: fmaxcamb1.toFixed(2).toString(),
    fmaxcamb2: fmaxcamb2.toFixed(2).toString(),
    fmaxcamb3: fmaxcamb3.toFixed(2).toString(),
    fmaxcamb4: fmaxcamb4.toFixed(2).toString(),
    fmincamb1: fmincamb1.toFixed(2).toString(),
    fmincamb2: fmincamb2.toFixed(2).toString(),
    fmincamb3: fmincamb3.toFixed(2).toString(),
    fmincamb4: fmincamb4.toFixed(2).toString(),
    fmaxenc1: fmaxenc1.toFixed(2).toString(),
    fmaxenc2: fmaxenc2.toFixed(2).toString(),
    fmaxenc3: fmaxenc3.toFixed(2).toString(),
    fmaxenc4: fmaxenc4.toFixed(2).toString(),
    fminenc1: fminenc1.toFixed(2).toString(),
    fminenc2: fminenc2.toFixed(2).toString(),
    fminenc3: fminenc3.toFixed(2).toString(),
    fminenc4: fminenc4.toFixed(2).toString(),
    fmeddes: nueva_fmedencBANCO.toFixed(2).toString(),
    fmedcamb: nueva_fmedcambBANCO.toFixed(2).toString(),
    fmedenc: nueva_fmedencBANCO.toFixed(2).toString()
  })
  .returning();
  return ({nuevos_valores})
}


async function ValoresEAVM(EAVM:string){
  // Cogemos valores agregados del EAVM 
  let valores: ValoresBancoEAVM
  const val_bd: ValoresBancoEAVM[] = await verceldb
  .select()
  .from(ValoresBancoEAVMs)
  .where(eq(ValoresBancoEAVMs.EAVM, EAVM as string))
  .limit(1);
  // Si no existe el registro lo creamos
  if (!val_bd[0]){
    const val_new: ValoresBancoEAVM [] = await verceldb
    .insert(ValoresBancoEAVMs)
    .values({EAVM: EAVM as string})
    .returning();
    valores = val_new[0]
  }
  else {
    valores = val_bd[0]
  }
  return valores
}

export async function CalcularValoresEAVM(
  EAVM: string, 
  valores_cambio: ValorCambioBanco[]) 
  {
  const valores = await ValoresEAVM(EAVM);
  let num_cambios = 1
  let num_val_d = 0
  let num_val_c = 0
  let num_val_e = 0
  let fmaxdes = 0
  let posmaxdes = 0
  let fmaxcamb = 0
  let posmaxcamb = 0
  let fminenc = 0
  let posminenc = 0
  let fmeddes = 0
  let fmedcamb = 0
  let fmedenc = 0

  if (valores.num_cambios) {num_cambios = valores.num_cambios + 1}
  if (valores.fmaxdes) {fmaxdes = parseFloat(valores.fmaxdes)}
  if (valores.posmaxdes) {posmaxdes = parseFloat(valores.posmaxdes)}
  if (valores.fmaxcamb) {fmaxcamb = parseFloat(valores.fmaxcamb)}
  if (valores.posmaxcamb) {posmaxcamb = parseFloat(valores.posmaxcamb)}
  if (valores.fminenc) {fminenc = parseFloat(valores.fminenc)}
  if (valores.posminenc) {posminenc = parseFloat(valores.posminenc)}

  valores_cambio.map((valor: ValorCambioBanco) => {
    let f = 0
    let pos = 0
    if (valor.f) {f = parseFloat(valor.f)}
    if (valor.pos) {pos = parseFloat(valor.pos)}
    if (valor.etapa === 'D'){
      if (fmaxdes < f)
      {
        fmaxdes = f 
        posmaxdes = pos
      }
      fmeddes = (fmeddes * (num_val_d) + f)/(num_val_d + 1)
      num_val_d = num_val_d +1
    }
    if (valor.etapa === 'C'){
      if (fmaxcamb < f)
      {
        fmaxcamb = f
        posmaxcamb = pos
      }
      fmedcamb = (fmedcamb * (num_val_c) + f)/(num_val_c + 1)
      num_val_c = num_val_c + 1
    }
    if (valor.etapa === 'E'){
      if (fminenc < f)
      {
        fminenc = f
        posminenc = pos
      }
      fmedenc = (fmedenc * (num_val_e) + f)/(num_val_e + 1)
      num_val_e = num_val_e + 1
    }
  });
  // Claculamos los valores medios del EAVM.
  let fmeddesEAVM = 0
  let nueva_fmeddesEAVM = 0
  let fmedcambEAVM = 0
  let nueva_fmedcambEAVM = 0
  let fmedencEAVM = 0
  let nueva_fmedencEAVM = 0
  if (valores.fmeddes) {fmeddesEAVM = parseFloat(valores.fmeddes)}
  if (valores.fmedcamb) {fmeddesEAVM = parseFloat(valores.fmedcamb)}
  if (valores.fmedenc) {fmeddesEAVM = parseFloat(valores.fmedenc)}
  nueva_fmedencEAVM = (fmeddesEAVM * (num_cambios -1) + fmeddes) / num_cambios
  nueva_fmedcambEAVM = (fmedcambEAVM * (num_cambios -1) + fmedcamb) / num_cambios
  nueva_fmedencEAVM = (fmedencEAVM * (num_cambios -1) + fmedenc) / num_cambios
  
  const nuevos_valores = await verceldb
  .update(ValoresBancoEAVMs)
  .set({
    num_cambios: num_cambios,
    fmaxdes: fmaxdes.toFixed(2).toString(),
    posmaxdes: posmaxdes.toFixed(2).toString(),
    fmaxcamb: fmaxcamb.toFixed(2).toString(),
    posmaxcamb: posmaxcamb.toFixed(2).toString(),
    fminenc: fminenc.toFixed(2).toString(),
    posminenc: posminenc.toFixed(2).toString(),
    fmeddes: nueva_fmedencEAVM.toFixed(2).toString(),
    fmedcamb: nueva_fmedcambEAVM.toFixed(2).toString(),
    fmedenc: nueva_fmedencEAVM.toFixed(2).toString()
  })
  .where(eq(ValoresBancoEAVMs.EAVM, EAVM as string))
  .returning();
  return ({nuevos_valores})
}
