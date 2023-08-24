ALTER TABLE "CambiosBanco" ALTER COLUMN "sentidos_cambio" SET DEFAULT 'IBUIC';
ALTER TABLE "CambiosBanco" ADD COLUMN "EAVM" varchar;
DO $$ BEGIN
 ALTER TABLE "CambiosBanco" ADD CONSTRAINT "CambiosBanco_EAVM_EAVMs_codigo_fk" FOREIGN KEY ("EAVM") REFERENCES "EAVMs"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
