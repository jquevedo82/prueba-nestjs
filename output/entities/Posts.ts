import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("posts_pkey", ["id"], { unique: true })
@Entity("posts", { schema: "public" })
export class Posts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("character varying", { name: "body", length: 255 })
  body: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
