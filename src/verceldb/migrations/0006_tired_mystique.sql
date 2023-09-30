ALTER TABLE "VersionesCambiadores" ALTER COLUMN "descripcion" SET DATA TYPE varchar(150);
ALTER TABLE "Cambiadores" ADD COLUMN "imagen" varchar(30) DEFAULT 'cordoba.png';
ALTER TABLE "ValoresCambiosEAVMs" ADD COLUMN "num_alarmas" integer DEFAULT 0;