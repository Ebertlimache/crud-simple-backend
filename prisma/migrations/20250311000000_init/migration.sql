-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_tipo_contribuyente" (
    "id_tipo_contribuyente" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "estado" BOOLEAN NOT NULL,

    CONSTRAINT "tb_tipo_contribuyente_pkey" PRIMARY KEY ("id_tipo_contribuyente")
);

-- CreateTable
CREATE TABLE "tb_tipo_documento" (
    "id_tipo_documento" SERIAL NOT NULL,
    "codigo" VARCHAR(20) NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" VARCHAR(200),
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tb_tipo_documento_pkey" PRIMARY KEY ("id_tipo_documento")
);

-- CreateTable
CREATE TABLE "tb_entidad" (
    "id_entidad" SERIAL NOT NULL,
    "id_tipo_documento" INTEGER NOT NULL,
    "nro_documento" VARCHAR(25) NOT NULL,
    "razon_social" VARCHAR(100) NOT NULL,
    "nombre_comercial" VARCHAR(100),
    "id_tipo_contribuyente" INTEGER,
    "direccion" VARCHAR(250),
    "telefono" VARCHAR(50),
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tb_entidad_pkey" PRIMARY KEY ("id_entidad")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_entidad_nro_documento_key" ON "tb_entidad"("nro_documento");

-- AddForeignKey
ALTER TABLE "tb_entidad" ADD CONSTRAINT "tb_entidad_id_tipo_documento_fkey" FOREIGN KEY ("id_tipo_documento") REFERENCES "tb_tipo_documento"("id_tipo_documento") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_entidad" ADD CONSTRAINT "tb_entidad_id_tipo_contribuyente_fkey" FOREIGN KEY ("id_tipo_contribuyente") REFERENCES "tb_tipo_contribuyente"("id_tipo_contribuyente") ON DELETE NO ACTION ON UPDATE NO ACTION;
