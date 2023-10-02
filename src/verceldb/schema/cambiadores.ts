import { integer, pgTable, serial, date, varchar, boolean, numeric } from 'drizzle-orm/pg-core';
import { TiposCambiadoresEnum, } from './enums';
import { sql } from 'drizzle-orm';

// Tipos Vehículos
export const VersionesCambiadores = pgTable('VersionesCambiadores', {
  codigo: varchar('codigo',{ length: 16 }).primaryKey(),
  descripcion: varchar('descripcion', { length: 150 }),
  longitud: numeric('longitud', { precision: 6, scale: 2 }),
  num_cuerpos: integer('num_cuerpos').default(2),
  imagen: varchar('imagen', { length: 30 }).default('cordoba.png'),
});

// Vehiculos
export const Cambiadores = pgTable('Cambiadores', {
  id: serial('id'),
  codigo: varchar('codigo', { length: 20 }).primaryKey(),
  tipo: TiposCambiadoresEnum('tipos_cambiadores').default('Experimental'),
  version: varchar('version').references(() => VersionesCambiadores.codigo),
  desc: varchar('desc', { length: 150 }),
  fabricante: varchar('fabricante', { length: 20 }).default('unknown'),
  fecha_fab: date('fecha_fab').defaultNow(),
  ultimo_mant: date('ultimo_mant').defaultNow(),
  prox_mant: date('prox_mant').defaultNow(),
  mant: boolean('mant').default(false),
  al_operacion:boolean('al_operacion').default(false),
  al_cambiador: boolean('al_cambiador').default(false),
  num_cambios: integer('num_cambios').default(0),
  imagen: varchar('imagen', { length: 30 }).default('cordoba.png'),
  lng: numeric('lng', { precision: 9, scale: 6 }).default(sql`'-4.8237'::numeric`),
  lat: numeric('lat', { precision: 9, scale: 6 }).default(sql`'37.8755'::numeric`),
  fmeddes: numeric('fmeddes', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  fmedcamb: numeric('fmedcamb', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
});

