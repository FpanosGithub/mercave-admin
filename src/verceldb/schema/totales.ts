import { integer, pgTable, serial, varchar, date, boolean, numeric } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { Vehiculos } from './vehiculos';
import { Cambiadores } from './cambiadores';
import { EAVMs } from './EAVMs';

// Resumen de valores globales del banco de ensayo
export const  TotalesBanco = pgTable('TotalesBanco', {
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
  // Resumen de valores globales de cambiadores
  export const  TotalesCambiadores = pgTable('TotalesCambiadores', {
    cambiador: varchar('cambiador').references(() => Cambiadores.codigo),
    num_cambios: integer('num_cambios').default(0),
    num_alarmas : integer('num_alarmas').default(0),
    fmeddes: numeric('fmeddes', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
    fmedcamb: numeric('fmedcamb', { precision: 8, scale: 2 }).default(sql`'0'::numeric`),
  });