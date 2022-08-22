import { Column, Entity, Index } from "typeorm";

@Index("password_resets_email_index", ["email"], {})
@Entity("password_resets", { schema: "public" })
export class PasswordResets {
  @Column("character varying", { name: "email", length: 255 })
  email: string;

  @Column("character varying", { name: "token", length: 255 })
  token: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;
}
