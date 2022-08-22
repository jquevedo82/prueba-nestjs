import { Column, Entity, Index } from "typeorm";

@Index("pk_operadores", ["codigo", "entidad"], { unique: true })
@Entity("operadores", { schema: "public" })
export class Operadores {
  @Column("smallint", { primary: true, name: "entidad" })
  entidad: number;

  @Column("character varying", { primary: true, name: "codigo", length: 20 })
  codigo: string;

  @Column("character varying", { name: "sinonimo", nullable: true, length: 20 })
  sinonimo: string | null;

  @Column("character varying", { name: "denominacion", length: 60 })
  denominacion: string;

  @Column("character varying", { name: "den_comercial", length: 60 })
  denComercial: string;

  @Column("character varying", { name: "domicilio", length: 60 })
  domicilio: string;

  @Column("character varying", { name: "localidad", length: 60 })
  localidad: string;

  @Column("character varying", { name: "postal", length: 10 })
  postal: string;

  @Column("smallint", { name: "tabla_pcia" })
  tablaPcia: number;

  @Column("character varying", { name: "provincia", length: 20 })
  provincia: string;

  @Column("smallint", { name: "tabla_pais" })
  tablaPais: number;

  @Column("character varying", { name: "pais", length: 20 })
  pais: string;

  @Column("smallint", { name: "tabla_iva" })
  tablaIva: number;

  @Column("character varying", { name: "iva", nullable: true, length: 20 })
  iva: string | null;

  @Column("smallint", { name: "tabla_iibb" })
  tablaIibb: number;

  @Column("character varying", {
    name: "regimen_iibb",
    nullable: true,
    length: 20,
  })
  regimenIibb: string | null;

  @Column("character varying", {
    name: "tipo_cuit",
    length: 20,
    default: () => "0",
  })
  tipoCuit: string;

  @Column("character", { name: "cuit", nullable: true, length: 13 })
  cuit: string | null;

  @Column("character varying", { name: "iibb", length: 20 })
  iibb: string;

  @Column("character varying", { name: "telefono", length: 20 })
  telefono: string;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "fax", length: 20 })
  fax: string;

  @Column("character varying", { name: "contacto", length: 60 })
  contacto: string;

  @Column("character varying", {
    name: "lista_precios",
    nullable: true,
    length: 10,
  })
  listaPrecios: string | null;

  @Column("character", { name: "habilitado", length: 10 })
  habilitado: string;

  @Column("smallint", { name: "tabla_clasif" })
  tablaClasif: number;

  @Column("character varying", {
    name: "clasificacion",
    nullable: true,
    length: 20,
  })
  clasificacion: string | null;

  @Column("smallint", { name: "iva_a_cargo", default: () => "1" })
  ivaACargo: number;
}
