DO $$ BEGIN
 CREATE TYPE "anchos" AS ENUM('UIC-IB', 'UIC-RUS', 'UIC-RUS-IB', 'METR-UIC', 'UIC', 'IB');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "clases" AS ENUM('LOC', 'VAG', 'MRA');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "organizaciones" AS ENUM('TRIA', 'ADIF', 'VGS', 'BV', 'MANFEV');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "sentidos_cambio" AS ENUM('UIC-IB', 'IB-UIC', 'UIC-RUS', 'RUS-UIC');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "tipos_eventos" AS ENUM('START', 'STOP', 'CIRC', 'NUDO');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "CambiosBanco" (
	"id" serial PRIMARY KEY NOT NULL,
	"fichero" varchar(30),
	"dt" date DEFAULT now(),
	"V" numeric(4, 1) DEFAULT '0'::numeric,
	"FV" numeric(8, 2) DEFAULT '0'::numeric,
	"sentidos_cambio" "sentidos_cambio" DEFAULT 'IB-UIC',
	"alarma" boolean
);

CREATE TABLE IF NOT EXISTS "CirculacionesEAVM" (
	"id" serial PRIMARY KEY NOT NULL,
	"EAVM" varchar,
	"abierta" boolean,
	"vehiculo" varchar,
	"dt_inicial" date DEFAULT now(),
	"lng_inicial" numeric(9, 6) DEFAULT '0'::numeric,
	"lat_inicial" numeric(9, 6) DEFAULT '0'::numeric,
	"loc_inicial" varchar(50),
	"dt_final" date DEFAULT now(),
	"lng_final" numeric(9, 6) DEFAULT '0'::numeric,
	"lat_final" numeric(9, 6) DEFAULT '0'::numeric,
	"loc_final" varchar(50),
	"alarma" boolean
);

CREATE TABLE IF NOT EXISTS "ConjuntosEAVM" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(50),
	"tipo" integer,
	"EAVM" varchar,
	"descripcion" varchar(60)
);

CREATE TABLE IF NOT EXISTS "EAVMs" (
	"id" serial NOT NULL,
	"codigo" varchar(16) PRIMARY KEY NOT NULL,
	"tipo" varchar,
	"owner" "organizaciones" DEFAULT 'ADIF',
	"fabricante" "organizaciones" DEFAULT 'TRIA',
	"keeper" "organizaciones" DEFAULT 'ADIF',
	"EEM" "organizaciones" DEFAULT 'TRIA',
	"vehiculo" varchar,
	"prox_mant" date DEFAULT now(),
	"servicio" boolean DEFAULT true,
	"observaciones" varchar(200),
	"mant" boolean DEFAULT false,
	"circ" boolean DEFAULT false,
	"al_temp" boolean DEFAULT false,
	"al_acel" boolean DEFAULT false,
	"al_camb" boolean DEFAULT false,
	"al_mant" boolean DEFAULT false,
	"tempa" numeric(4, 1) DEFAULT '25.0'::numeric,
	"tempb" numeric(4, 1) DEFAULT '25.0'::numeric,
	"lng" numeric(9, 6) DEFAULT '-3.9820'::numeric,
	"lat" numeric(9, 6) DEFAULT '40.2951'::numeric,
	"num_cambios" integer DEFAULT 0,
	"km_totales" numeric(11, 3) DEFAULT '0.11'::numeric,
	"coef_trabajo" numeric(3, 3) DEFAULT '0.1'::numeric
);

CREATE TABLE IF NOT EXISTS "ElementosEAVM" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(50),
	"tipo" integer,
	"subconjunto" integer,
	"descripcion" varchar(60)
);

CREATE TABLE IF NOT EXISTS "EventosEAVM" (
	"circulacion" integer,
	"EAVM" varchar,
	"dt" date DEFAULT now(),
	"vehiculo" varchar,
	"lng" numeric(9, 6) DEFAULT '0'::numeric,
	"lat" numeric(9, 6) DEFAULT '0'::numeric,
	"tipos_eventos" "tipos_eventos" DEFAULT 'CIRC',
	"vel" numeric(4, 1) DEFAULT '0'::numeric,
	"tempa" numeric(4, 1) DEFAULT '25.0'::numeric,
	"tempb" numeric(4, 1) DEFAULT '25.0'::numeric,
	"alarma" boolean,
	"axMa" numeric(6, 2) DEFAULT '2.5'::numeric,
	"axMb" numeric(6, 2) DEFAULT '2.5'::numeric,
	"ayMa" numeric(6, 2) DEFAULT '2.5'::numeric,
	"ayMb" numeric(6, 2) DEFAULT '2.5'::numeric,
	"azMa" numeric(6, 2) DEFAULT '2.5'::numeric,
	"azMb" numeric(6, 2) DEFAULT '2.5'::numeric,
	"axmeda" numeric(6, 2) DEFAULT '2.5'::numeric,
	"axmedb" numeric(6, 2) DEFAULT '2.5'::numeric,
	"aymeda" numeric(6, 2) DEFAULT '2.5'::numeric,
	"aymedb" numeric(6, 2) DEFAULT '2.5'::numeric,
	"azmeda" numeric(6, 2) DEFAULT '2.5'::numeric,
	"azmedb" numeric(6, 2) DEFAULT '2.5'::numeric
);

CREATE TABLE IF NOT EXISTS "SubconjuntosEAVM" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(50),
	"tipo" integer,
	"conjunto" integer,
	"descripcion" varchar(60)
);

CREATE TABLE IF NOT EXISTS "TiposEAVMs" (
	"codigo" varchar(16) PRIMARY KEY NOT NULL,
	"anchos" "anchos" DEFAULT 'UIC-IB',
	"imagen" varchar(30) DEFAULT 'eje.png'
);

CREATE TABLE IF NOT EXISTS "ValoresBancoEAVMs" (
	"EAVM" varchar,
	"num_cambios" integer DEFAULT 0,
	"fmaxdes" numeric(8, 2) DEFAULT '0'::numeric,
	"posmaxdes" numeric(6, 2) DEFAULT '0'::numeric,
	"fmaxcamb" numeric(8, 2) DEFAULT '0'::numeric,
	"posmaxcamb" numeric(6, 2) DEFAULT '0'::numeric,
	"fminenc" numeric(8, 2) DEFAULT '0'::numeric,
	"posminenc" numeric(6, 2) DEFAULT '0'::numeric,
	"fmeddes" numeric(8, 2) DEFAULT '0'::numeric,
	"fmedcamb" numeric(8, 2) DEFAULT '0'::numeric,
	"fmedenc" numeric(8, 2) DEFAULT '0'::numeric
);

CREATE TABLE IF NOT EXISTS "ValorCambioBanco" (
	"cambio" integer,
	"ms" numeric(8, 1) DEFAULT '0'::numeric,
	"rueda" varchar(1),
	"etapa" varchar(2),
	"f" numeric(8, 2) DEFAULT '0'::numeric,
	"pos" numeric(6, 2) DEFAULT '0'::numeric
);

CREATE TABLE IF NOT EXISTS "CirculacionesVehiculo" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehiculo" varchar,
	"abierta" boolean,
	"dt_inicial" date DEFAULT now(),
	"lng_inicial" numeric(9, 6) DEFAULT '0'::numeric,
	"lat_inicial" numeric(9, 6) DEFAULT '0'::numeric,
	"loc_inicial" varchar(50),
	"dt_final" date DEFAULT now(),
	"lng_final" numeric(9, 6) DEFAULT '0'::numeric,
	"lat_final" numeric(9, 6) DEFAULT '0'::numeric,
	"loc_final" varchar(50),
	"alarma" boolean
);

CREATE TABLE IF NOT EXISTS "ConjuntosVehiculos" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(50),
	"tipo" integer,
	"vehiculo" varchar,
	"descripcion" varchar(60)
);

CREATE TABLE IF NOT EXISTS "SubconjuntosVehiculos" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(50),
	"tipo" integer,
	"conjunto" integer,
	"descripcion" varchar(60)
);

CREATE TABLE IF NOT EXISTS "EventosVehiculo" (
	"vehiculo" varchar,
	"tipos_eventos" "tipos_eventos" DEFAULT 'CIRC',
	"dt" date DEFAULT now(),
	"lng" numeric(9, 6) DEFAULT '0'::numeric,
	"lat" numeric(9, 6) DEFAULT '0'::numeric,
	"vel" numeric(4, 1) DEFAULT '0'::numeric,
	"alarma" boolean,
	"circulacion" integer
);

CREATE TABLE IF NOT EXISTS "TiposVehiculos" (
	"codigo" varchar(16) PRIMARY KEY NOT NULL,
	"clase" "clases" DEFAULT 'VAG',
	"descripcion" varchar(50),
	"marca" varchar(50),
	"modelo" varchar(50),
	"tipo_uic" varchar(2),
	"serie_uic" varchar(4),
	"imagen" varchar(30) DEFAULT 'tolva.png'
);

CREATE TABLE IF NOT EXISTS "Vehiculos" (
	"id" serial NOT NULL,
	"num_uic" varchar(20) PRIMARY KEY NOT NULL,
	"tipo" varchar,
	"desc" varchar(100),
	"owner" "organizaciones" DEFAULT 'ADIF',
	"keeper" "organizaciones" DEFAULT 'ADIF',
	"fabricante" varchar(20) DEFAULT 'unknown',
	"fecha_fab" date DEFAULT now(),
	"EEM" "organizaciones" DEFAULT 'MANFEV',
	"ultimo_mant" date DEFAULT now(),
	"prox_mant" date DEFAULT now(),
	"km_mant" numeric(9, 1) DEFAULT '125000'::numeric,
	"nivel_mant" integer DEFAULT 1,
	"servicio" boolean DEFAULT true,
	"observaciones" varchar(200),
	"mant" boolean DEFAULT false,
	"circ" boolean DEFAULT true,
	"nudo" boolean DEFAULT true,
	"transmitiendo" boolean DEFAULT true,
	"al_circ" boolean DEFAULT false,
	"al_mant" boolean DEFAULT false,
	"ultimo_evento" date DEFAULT now(),
	"vel" numeric(6, 2) DEFAULT '80.2'::numeric,
	"lng" numeric(9, 6) DEFAULT '-3.9820'::numeric,
	"lat" numeric(9, 6) DEFAULT '40.2951'::numeric,
	"km_totales" numeric(11, 3) DEFAULT '0.11'::numeric
);

DO $$ BEGIN
 ALTER TABLE "CirculacionesEAVM" ADD CONSTRAINT "CirculacionesEAVM_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "CirculacionesEAVM" ADD CONSTRAINT "CirculacionesEAVM_vehiculo_Vehiculos_num_uic_fk" FOREIGN KEY ("vehiculo") REFERENCES "Vehiculos"("num_uic") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ConjuntosEAVM" ADD CONSTRAINT "ConjuntosEAVM_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EAVMs" ADD CONSTRAINT "EAVMs_tipo_TiposEAVMs_codigo_fk" FOREIGN KEY ("tipo") REFERENCES "TiposEAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EAVMs" ADD CONSTRAINT "EAVMs_vehiculo_Vehiculos_num_uic_fk" FOREIGN KEY ("vehiculo") REFERENCES "Vehiculos"("num_uic") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ElementosEAVM" ADD CONSTRAINT "ElementosEAVM_subconjunto_SubconjuntosEAVM_id_fk" FOREIGN KEY ("subconjunto") REFERENCES "SubconjuntosEAVM"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EventosEAVM" ADD CONSTRAINT "EventosEAVM_circulacion_CirculacionesEAVM_id_fk" FOREIGN KEY ("circulacion") REFERENCES "CirculacionesEAVM"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EventosEAVM" ADD CONSTRAINT "EventosEAVM_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EventosEAVM" ADD CONSTRAINT "EventosEAVM_vehiculo_Vehiculos_num_uic_fk" FOREIGN KEY ("vehiculo") REFERENCES "Vehiculos"("num_uic") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "SubconjuntosEAVM" ADD CONSTRAINT "SubconjuntosEAVM_conjunto_ConjuntosEAVM_id_fk" FOREIGN KEY ("conjunto") REFERENCES "ConjuntosEAVM"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ValoresBancoEAVMs" ADD CONSTRAINT "ValoresBancoEAVMs_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ValorCambioBanco" ADD CONSTRAINT "ValorCambioBanco_cambio_CambiosBanco_id_fk" FOREIGN KEY ("cambio") REFERENCES "CambiosBanco"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "CirculacionesVehiculo" ADD CONSTRAINT "CirculacionesVehiculo_vehiculo_Vehiculos_num_uic_fk" FOREIGN KEY ("vehiculo") REFERENCES "Vehiculos"("num_uic") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ConjuntosVehiculos" ADD CONSTRAINT "ConjuntosVehiculos_vehiculo_Vehiculos_num_uic_fk" FOREIGN KEY ("vehiculo") REFERENCES "Vehiculos"("num_uic") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "SubconjuntosVehiculos" ADD CONSTRAINT "SubconjuntosVehiculos_conjunto_ConjuntosVehiculos_id_fk" FOREIGN KEY ("conjunto") REFERENCES "ConjuntosVehiculos"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EventosVehiculo" ADD CONSTRAINT "EventosVehiculo_vehiculo_Vehiculos_num_uic_fk" FOREIGN KEY ("vehiculo") REFERENCES "Vehiculos"("num_uic") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "EventosVehiculo" ADD CONSTRAINT "EventosVehiculo_circulacion_CirculacionesVehiculo_id_fk" FOREIGN KEY ("circulacion") REFERENCES "CirculacionesVehiculo"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "Vehiculos" ADD CONSTRAINT "Vehiculos_tipo_TiposVehiculos_codigo_fk" FOREIGN KEY ("tipo") REFERENCES "TiposVehiculos"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
