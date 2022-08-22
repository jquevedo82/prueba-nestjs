import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users_email_unique", ["email"], { unique: true })
@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("timestamp without time zone", {
    name: "email_verified_at",
    nullable: true,
  })
  emailVerifiedAt: Date | null;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Column("character varying", {
    name: "remember_token",
    nullable: true,
    length: 100,
  })
  rememberToken: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
