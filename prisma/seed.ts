import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.entidad.deleteMany();
  await prisma.tipoContribuyente.deleteMany();
  await prisma.tipoDocumento.deleteMany();

  await prisma.tipoContribuyente.createMany({
    data: [
      { nombre: 'Natural Sin Negocio', estado: true },
      { nombre: 'Juridica', estado: true },
      { nombre: 'Natural Con Negocio', estado: true },
      { nombre: 'No Domiciliado', estado: true },
    ],
  });

  await prisma.tipoDocumento.createMany({
    data: [
      { codigo: '4', nombre: 'CARNET DE EXTRANJERIA', descripcion: 'CARNET DE EXTRANJERIA', estado: true },
      { codigo: '7', nombre: 'PASAPORTE', descripcion: 'PASAPORTE', estado: true },
      { codigo: '11', nombre: 'PARTIDA DE NACIMIENTO - IDENTIDAD', descripcion: 'PARTIDA DE NACIMIENTO - IDENTIDAD', estado: true },
      { codigo: '99', nombre: 'OTROS', descripcion: 'OTROS', estado: true },
      { codigo: '6', nombre: 'RUC', descripcion: 'REGISTRO UNICO DEL CONTRIBUYENTE', estado: true },
      { codigo: '1', nombre: 'DNI', descripcion: 'DOCUMENTO NACIONAL DE IDENTIDAD', estado: true },
    ],
  });

  await prisma.entidad.createMany({
    data: [
      { idTipoDocumento: 3, nroDocumento: '20505327552', razonSocial: 'SYL S.A.C', nombreComercial: 'SYL CARGO NOMBRE COMERCIAL', idTipoContribuyente: 1, direccion: 'Jr. Comandante Jimenez Nro. 166 Int. a', telefono: '79845612', estado: true },
      { idTipoDocumento: 3, nroDocumento: '20543844838', razonSocial: 'PUNTUAL EXPRESS S.A.C.', idTipoContribuyente: 1, direccion: 'MZA. F LOTE. 29 AS.RSD.MONTECARLO II LIMA', estado: true },
      { idTipoDocumento: 3, nroDocumento: '10410192999', razonSocial: 'ALVAREZ MACHUCA RENZO GUSTAVO', idTipoContribuyente: 3, direccion: 'AV. LOS ALISOS MZA. G LOTE. 05 ASC. LA ALBORADA', estado: true },
      { idTipoDocumento: 3, nroDocumento: '20600131037', razonSocial: 'CARNICOS MAFER S.A.C.', idTipoContribuyente: 2, direccion: 'CAL.EL UNIVERSO NRO. 327 URB. LA CAMPIÑA', estado: true },
      { idTipoDocumento: 3, nroDocumento: '20556528218', razonSocial: 'SUMAQUINARIA S.A.C.', idTipoContribuyente: 2, direccion: 'AV. M.SUCRE NRO. 455 DPTO. 603 LIMA', estado: true },
      { idTipoDocumento: 3, nroDocumento: '20545412528', razonSocial: 'OASIS FOODS S.A.C.', idTipoContribuyente: 2, direccion: 'CAL. FRANCISCO MASIAS NRO. 370 URB. SAN EUGENIO', estado: true },
      { idTipoDocumento: 3, nroDocumento: '20510620195', razonSocial: 'INVERSIONES PRO3 SAC', idTipoContribuyente: 2, direccion: 'AV. AUTOPIDTA RAMIRO PRIALE LOTE. 02', estado: true },
      { idTipoDocumento: 3, nroDocumento: '20498383361', razonSocial: 'REPUESTOS DAVID DIESEL E.I.R.L.', idTipoContribuyente: 2, direccion: 'CAR.VIA EVITAMIENTO MZA. 857 LOTE. 7 AREQUIPA', estado: true },
      { idTipoDocumento: 6, nroDocumento: 'CNAH00003', razonSocial: 'ANHUI HAYVO PROTECTIVE PRODUCT MANUFACTURING CO.,LTD', idTipoContribuyente: 4, direccion: '173 FENGLE AVENUE,ECNOMIC DEVELOPMENT ZONE', estado: true },
    ],
  });

  console.log('Seed completado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
