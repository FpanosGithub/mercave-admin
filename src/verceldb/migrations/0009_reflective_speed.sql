ALTER TABLE "TotalesCambios" RENAME TO "TotalesCambiadores";
ALTER TABLE "TotalesCambiadores" ADD COLUMN "cambiador" varchar;
DO $$ BEGIN
 ALTER TABLE "TotalesCambiadores" ADD CONSTRAINT "TotalesCambiadores_cambiador_Cambiadores_codigo_fk" FOREIGN KEY ("cambiador") REFERENCES "Cambiadores"("codigo") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
