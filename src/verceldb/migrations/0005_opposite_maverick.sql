DO $$ BEGIN
 CREATE TYPE "tipos_cambiadores" AS ENUM('Experimental', 'Comercial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "Cambiadores" (
	"id" serial NOT NULL,
	"codigo" varchar(20) PRIMARY KEY NOT NULL,
	"tipos_cambiadores" "tipos_cambiadores" DEFAULT 'Experimental',
	"version" varchar,
	"desc" varchar(150),
	"fabricante" varchar(20) DEFAULT 'unknown',
	"fecha_fab" date DEFAULT now(),
	"ultimo_mant" date DEFAULT now(),
	"prox_mant" date DEFAULT now(),
	"mant" boolean DEFAULT false,
	"al_operacion" boolean DEFAULT false,
	"al_cambiador" boolean DEFAULT false,
	"num_cambios" integer DEFAULT 0
);

CREATE TABLE IF NOT EXISTS "VersionesCambiadores" (
	"codigo" varchar(16) PRIMARY KEY NOT NULL,
	"descripcion" varchar(50),
	"longitud" numeric(6, 2),
	"num_cuerpos" integer DEFAULT 2,
	"imagen" varchar(30) DEFAULT 'cordoba.png'
);

CREATE TABLE IF NOT EXISTS "Cambios" (
	"id" serial PRIMARY KEY NOT NULL,
	"dt" date DEFAULT now(),
	"EAVM" varchar,
	"cambiador" varchar,
	"V" numeric(4, 1) DEFAULT '5'::numeric,
	"FV" numeric(8, 2) DEFAULT '0'::numeric,
	"sentidos_cambio" "sentidos_cambio" DEFAULT 'IBUIC',
	"fda" numeric(8, 2) DEFAULT '0'::numeric,
	"fca" numeric(8, 2) DEFAULT '0'::numeric,
	"fcb" numeric(8, 2) DEFAULT '0'::numeric,
	"alarma" boolean
);

CREATE TABLE IF NOT EXISTS "ValoresCambiosEAVMs" (
	"EAVM" varchar,
	"num_cambios" integer DEFAULT 0,
	"fmaxdes" numeric(8, 2) DEFAULT '0'::numeric,
	"fmaxcamb" numeric(8, 2) DEFAULT '0'::numeric,
	"fmeddes" numeric(8, 2) DEFAULT '0'::numeric,
	"fmedcamb" numeric(8, 2) DEFAULT '0'::numeric
);

DO $$ BEGIN
 ALTER TABLE "Cambiadores" ADD CONSTRAINT "Cambiadores_version_VersionesCambiadores_codigo_fk" FOREIGN KEY ("version") REFERENCES "VersionesCambiadores"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "Cambios" ADD CONSTRAINT "Cambios_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "Cambios" ADD CONSTRAINT "Cambios_cambiador_Cambiadores_codigo_fk" FOREIGN KEY ("cambiador") REFERENCES "Cambiadores"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "ValoresCambiosEAVMs" ADD CONSTRAINT "ValoresCambiosEAVMs_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
