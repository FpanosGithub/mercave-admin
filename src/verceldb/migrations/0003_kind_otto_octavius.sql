ALTER TABLE "ValorCambioBanco" RENAME TO "ValoresCambiosBanco";
ALTER TABLE "ValoresCambiosBanco" DROP CONSTRAINT "ValorCambioBanco_cambio_CambiosBanco_id_fk";

DO $$ BEGIN
 ALTER TABLE "ValoresCambiosBanco" ADD CONSTRAINT "ValoresCambiosBanco_cambio_CambiosBanco_id_fk" FOREIGN KEY ("cambio") REFERENCES "CambiosBanco"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
