import { integer, pgTable, serial, date, varchar, boolean, numeric } from 'drizzle-orm/pg-core';
import { InferModel, sql } from 'drizzle-orm';
import { orgEnum, clasesVehiculosEnum, tiposEventoEnum } from './enums';

// Tipos Vehículos
export const TiposVehiculos = pgTable('TiposVehiculos', {
  codigo: varchar('codigo',{ length: 16 }).primaryKey(),
  clase: clasesVehiculosEnum('clase').default('VAG'),
  descripcion: varchar('descripcion', { length: 50 }),
  marca: varchar('marca', { length: 50 }),
  modelo: varchar('modelo', { length: 50 }),
  tipo_uic: varchar('tipo_uic', { length: 2 }),
  serie_uic: varchar('serie_uic', { length: 4 }),
  imagen: varchar('imagen', { length: 30 }).default('tolva.png'),
});

// Vehiculos
export const Vehiculos = pgTable('Vehiculos', {
  id: serial('id'),
  num_uic: varchar('num_uic', { length: 20 }).primaryKey(),
  tipo: varchar('tipo').references(() => TiposVehiculos.codigo),
  descripcion: varchar('desc', { length: 100 }),
  owner: orgEnum('owner').default('ADIF'),
  keeper: orgEnum('keeper').default('ADIF'),
  fabricante: varchar('fabricante', { length: 20 }).default('unknown'),
  fecha_fab: date('fecha_fab').defaultNow(),
  EEM: orgEnum('EEM').default('MANFEV'),
  ultimo_mant: date('ultimo_mant').defaultNow(),
  prox_mant: date('prox_mant').defaultNow(),
  km_mant: numeric('km_mant', { precision: 9, scale: 1 }).default(sql`'125000'::numeric`),
  nivel_mant: integer('nivel_mant').default(1),
  servicio: boolean('servicio').default(true),
  observaciones: varchar('observaciones', { length: 200 }),
  mant: boolean('mant').default(false),
  cir: boolean('circ').default(true),
  nudo: boolean('nudo').default(true),
  transmitiendo: boolean('transmitiendo').default(true),
  al_circ:boolean('al_circ').default(false),
  al_mant: boolean('al_mant').default(false),
  ultimo_evento: date('ultimo_evento').defaultNow(),
  vel: numeric('vel', { precision: 6, scale: 2 }).default(sql`'80.2'::numeric`),
  lng: numeric('lng', { precision: 9, scale: 6 }).default(sql`'-3.9820'::numeric`),
  lat: numeric('lat', { precision: 9, scale: 6 }).default(sql`'40.2951'::numeric`),
  km_totales: numeric('km_totales', { precision: 11, scale: 3 }).default(sql`'0.11'::numeric`),
});

export const ConjuntosVehiculos = pgTable('ConjuntosVehiculos', {
  id: serial('id').primaryKey(),
  codigo: varchar('codigo', { length: 50 }),
  tipo: integer('tipo'),
  vehiculo: varchar('vehiculo').references(() => Vehiculos.num_uic),
  descripcion: varchar('descripcion', { length: 60 }),
})

export const SubconjuntosVehiculos = pgTable('SubconjuntosVehiculos', {
  id: serial('id').primaryKey(),
  codigo: varchar('codigo', { length: 50 }),
  tipo: integer('tipo'),
  conjunto: integer('conjunto').references(() => ConjuntosVehiculos.id),
  descripcion: varchar('descripcion', { length: 60 }),
})

export const ElementosVehiculos = pgTable('SubconjuntosVehiculos', {
  id: serial('id').primaryKey(),
  codigo: varchar('codigo', { length: 50 }),
  tipo: integer('tipo'),
  subconjunto: integer('subconjunto').references(() => SubconjuntosVehiculos.id),
  descripcion: varchar('descripcion', { length: 60 }),
})

// Eventos de vehículo
export const CirculacionesVehiculo = pgTable('CirculacionesVehiculo', {
  id: serial('id').primaryKey(),
  vehiculo: varchar('vehiculo').references(() => Vehiculos.num_uic),
  abierta: boolean('abierta'),
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

export const EventosVehiculo = pgTable('EventosVehiculo', {
  vehiculo: varchar('vehiculo').references(() => Vehiculos.num_uic),
  tipo: tiposEventoEnum('tipos_eventos').default('CIRC'),
  dt: date('dt').defaultNow(),
  lng: numeric('lng', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  lat: numeric('lat', { precision: 9, scale: 6 }).default(sql`'0'::numeric`),
  vel: numeric('vel', { precision: 4, scale: 1 }).default(sql`'0'::numeric`),
  alarma: boolean('alarma'),
  circulacion: integer('circulacion').references(() => CirculacionesVehiculo.id),
});

export type Vehiculo = InferModel<typeof Vehiculos, "select">;
export type NewVehiculo = InferModel<typeof Vehiculos, "insert">;
export type TipoVehiculo = InferModel<typeof TiposVehiculos, "select">;
export type NewTipoVehiculo = InferModel<typeof TiposVehiculos, "insert">;