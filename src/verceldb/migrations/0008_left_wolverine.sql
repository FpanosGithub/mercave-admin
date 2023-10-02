CREATE TABLE IF NOT EXISTS "TotalesCambios" (
	"num_cambios" integer DEFAULT 0,
	"fmeddes" numeric(8, 2) DEFAULT '0'::numeric,
	"fmedcamb" numeric(8, 2) DEFAULT '0'::numeric
);

ALTER TABLE "ValoresCambiosEAVMs" RENAME TO "TotalesEAVMsCambios";
ALTER TABLE "TotalesEAVMsCambios" DROP CONSTRAINT "ValoresCambiosEAVMs_EAVM_EAVMs_codigo_fk";

ALTER TABLE "Cambiadores" ADD COLUMN "fmeddes" numeric(8, 2) DEFAULT '0'::numeric;
ALTER TABLE "Cambiadores" ADD COLUMN "fmedcamb" numeric(8, 2) DEFAULT '0'::numeric;
DO $$ BEGIN
 ALTER TABLE "TotalesEAVMsCambios" ADD CONSTRAINT "TotalesEAVMsCambios_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
