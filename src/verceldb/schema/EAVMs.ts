import { integer, pgTable, serial, varchar, date, boolean, numeric } from 'drizzle-orm/pg-core';
import { InferModel, sql } from 'drizzle-orm';
import { anchosEnum, orgEnum, tiposEventoEnum, sentidoCambioEnum } from './enums';
import { Vehiculos } from './vehiculos';

// Tipos EAVMs
export const TiposEAVMs = pgTable('TiposEAVMs', {
  codigo: varchar('codigo', { length: 16 }).primaryKey(),
  anchos: anchosEnum('anchos').default('UIC-IB'),
  imagen: varchar('imagen', { length: 30 }).default('eje.png'),
});

// EAVMs
export const EAVMs = pgTable('EAVMs', {
  id: serial('id'),
  codigo: varchar('codigo', { length: 16 }).primaryKey(),
  tipo: varchar('tipo').references(() => TiposEAVMs.codigo),
  owner: orgEnum('owner').default('ADIF'),
  fabricante: orgEnum('fabricante').default('TRIA'),
  keeper: orgEnum('keeper').default('ADIF'),
  EEM: orgEnum('EEM').default('TRIA'),
  vehiculo: varchar('vehiculo').references(() => Vehiculos.num_uic),
  prox_mant: date('prox_mant').defaultNow(),
  servicio: boolean('servicio').default(true),
  observaciones: varchar('observaciones', { length: 200 }),
  mant: boolean('mant').default(false),
  cir: boolean('circ').default(false),
  al_temp:boolean('al_temp').default(false),
  al_acel:boolean('al_acel').default(false),
  al_camb: boolean('al_camb').default(false),
  al_mant: boolean('al_mant').default(false),
  tempa: numeric('tempa', { precision: 4, scale: 1 }).default(sql`'25.0'::numeric`),
  tempb: numeric('tempb', { precision: 4, scale: 1 }).default(sql`'25.0'::numeric`),
  lng: numeric('lng', { precision: 9, scale: 6 }).default(sql`'-3.9820'::numeric`),
  lat: numeric('lat', { precision: 9, scale: 6 }).default(sql`'40.2951'::numeric`),
  num_cambios: integer('num_cambios').default(0),
  km_totales: numeric('km_totales', { precision: 11, scale: 3 }).default(sql`'0.11'::numeric`),
  coef_trabajo: numeric('coef_trabajo', { precision: 3, scale: 3 }).default(sql`'0.1'::numeric`),
});

export const ConjuntosEAVM = pgTable('ConjuntosEAVM', {
  id: serial('id').primaryKey(),
  codigo: varchar('codigo', { length: 50 }),
  tipo: integer('tipo'),
  EAVM: varchar('EAVM').references(() => EAVMs.codigo),
  descripcion: varchar('descripcion', { length: 60 }),
})

export const SubconjuntosEAVM = pgTable('SubconjuntosEAVM', {
  id: serial('id').primaryKey(),
  codigo: varchar('codigo', { length: 50 }),
  tipo: integer('tipo'),
  conjunto: integer('conjunto').references(() => ConjuntosEAVM.id),
  descripcion: varchar('descripcion', { length: 60 }),
})

export const ElementosEAVM = pgTable('ElementosEAVM', {
  id: serial('id').primaryKey(),
  codigo: varchar('codigo', { length: 50 }),
  tipo: integer('tipo'),
  subconjunto: integer('subconjunto').references(() => SubconjuntosEAVM.id),
  descripcion: varchar('descripcion', { length: 60 }),
})

// Eventos de circulación de EAVM

export const CirculacionesEAVM = pgTable('CirculacionesEAVM', {
  id: serial('id').primaryKey(),
  EAVM: varchar('EAVM').references(() => EAVMs.codigo),
  abierta: boolean('abierta'),
  en_vehiculo: varchar('vehiculo').references(() => Vehiculos.num_uic),
  dt_inicial: date('dt_inicial').defaultNow(),
  lng_inicial: numeric('lng_inicial', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  lat_inicial: numeric('lat_inicial', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  loc_inicial: varchar('loc_inicial', { length: 50 }),
  dt_final: date('dt_final').defaultNow(),
  lng_final: numeric('lng_final', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  lat_final: numeric('lat_final', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  loc_final: varchar('loc_final', { length: 50 }),
  alarma: boolean('alarma'),
});

export const EventosEAVM = pgTable('EventosEAVM', {
  circulacion: integer('circulacion').references(() => CirculacionesEAVM.id),
  EAVM: varchar('EAVM').references(() => EAVMs.codigo),
  dt: date('dt').defaultNow(),
  en_vehiculo: varchar('vehiculo').references(() => Vehiculos.num_uic),
  lng: numeric('lng', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  lat: numeric('lat', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  tipo: tiposEventoEnum('tipos_eventos').default('CIRC'),
  vel: numeric('vel', { precision: 4, scale: 1 }).default(sql`'0'::numeric`),
  tempa: numeric('tempa', { precision: 4, scale: 1 }).default(sql`'25.0'::numeric`),
  tempb: numeric('tempb', { precision: 4, scale: 1 }).default(sql`'25.0'::numeric`),
  alarma: boolean('alarma'),
  axMa: numeric('axMa', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  axMb: numeric('axMb', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  ayMa: numeric('ayMa', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  ayMb: numeric('ayMb', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  azMa: numeric('azMa', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  azMb: numeric('azMb', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  axmeda: numeric('axmeda', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  axmedb: numeric('axmedb', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  aymeda: numeric('aymeda', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  aymedb: numeric('aymedb', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  azmeda: numeric('azmeda', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
  azmedb: numeric('azmedb', { precision: 6, scale: 2 }).default(sql`'2.5'::numeric`),
});

// Cambios en cambiador


// Cambios en banco

export const  CambiosBanco = pgTable('CambiosBanco', {
  id: serial('id').primaryKey(),
  fichero: varchar('fichero', { length: 30 }),
  dt:date('dt').defaultNow(),
  V: numeric('V', { precision: 4, scale: 1 }).default(sql`'0'::numeric`),
  FV: numeric('FV', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  sentido: sentidoCambioEnum('sentidos_cambio').default('IB-UIC'),
  alarma: boolean('alarma'),
});

export const  ValorCambioBanco = pgTable('ValorCambioBanco', {
  cambio: integer('cambio').references(() => CambiosBanco.id),
  ms: numeric('ms', { precision: 8, scale: 1 }).default(sql`'0'::numeric`),
  rueda: varchar('rueda', { length: 1 }),
  etapa: varchar('etapa', { length: 2 }),
  f: numeric('f', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  pos: numeric('pos', { precision: 6, scale: 2 }).default(sql`'0'::numeric`),
});

export const  ValoresBancoEAVMs = pgTable('ValoresBancoEAVMs', {
  EAVM: varchar('EAVM').references(() => EAVMs.codigo), 
  num_cambios: integer('num_cambios').default(0),
  fmaxdes: numeric('fmaxdes', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  posmaxdes: numeric('posmaxdes', { precision: 6, scale: 2 }).default(sql`'0'::numeric`),
  fmaxcamb: numeric('fmaxcamb', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  posmaxcamb: numeric('posmaxcamb', { precision: 6, scale: 2 }).default(sql`'0'::numeric`),
  fminenc: numeric('fminenc', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  posminenc: numeric('posminenc', { precision: 6, scale: 2 }).default(sql`'0'::numeric`),
  fmeddes: numeric('fmeddes', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmedcamb: numeric('fmedcamb', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmedenc: numeric('fmedenc', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
});

export const  TotalesBanco = pgTable('ValoresBancoEAVMs', {
  num_cambios: integer('num_cambios').default(0),
  fmaxdes1: numeric('fmaxdes1', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxdes2: numeric('fmaxdes2', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxdes3: numeric('fmaxdes3', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxdes4: numeric('fmaxdes4', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmindes1: numeric('fmindes1', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmindes2: numeric('fmindes2', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmindes3: numeric('fmindes3', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmindes4: numeric('fmindes4', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxcamb1: numeric('fmaxcamb1', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxcamb2: numeric('fmaxcamb2', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxcamb3: numeric('fmaxcamb3', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxcamb4: numeric('fmaxcamb4', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmincamb1: numeric('fmincamb1', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmincamb2: numeric('fmincamb2', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmincamb3: numeric('fmincamb3', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmincamb4: numeric('fmincamb4', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxenc1: numeric('fmaxenc1', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxenc2: numeric('fmaxenc2', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxenc3: numeric('fmaxenc3', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmaxenc4: numeric('fmaxenc4', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fminenc1: numeric('fminenc1', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fminenc2: numeric('fminenc2', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fminenc3: numeric('fminenc3', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fminenc4: numeric('fminenc4', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmeddes: numeric('fmeddes', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmedcamb: numeric('fmedcamb', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmedenc: numeric('fmedenc', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
});


export type EAVM = InferModel<typeof EAVMs, "select">;
export type NewEAVM = InferModel<typeof EAVMs, "insert">;
export type TipoEAVM = InferModel<typeof TiposEAVMs, "select">;
export type NewTipoEAVM = InferModel<typeof TiposEAVMs, "insert">;