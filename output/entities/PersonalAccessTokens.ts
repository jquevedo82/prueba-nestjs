import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("personal_access_tokens_pkey", ["id"], { unique: true })
@Index("personal_access_tokens_token_unique", ["token"], { unique: true })
@Index(
  "personal_access_tokens_tokenable_type_tokenable_id_index",
  ["tokenableId", "tokenableType"],
  {}
)
@Entity("personal_access_tokens", { schema: "public" })
export class PersonalAccessTokens {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "tokenable_type", length: 255 })
  tokenableType: string;

  @Column("bigint", { name: "tokenable_id" })
  tokenableId: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "token", unique: true, length: 64 })
  token: string;

  @Column("text", { name: "abilities", nullable: true })
  abilities: string | null;

  @Column("timestamp without time zone", {
    name: "last_used_at",
    nullable: true,
  })
  lastUsedAt: Date | null;

  @Column("timestamp without time zone", { name: "expires_at", nullable: true })
  expiresAt: Date | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
