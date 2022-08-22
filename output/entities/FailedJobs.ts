import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("failed_jobs_pkey", ["id"], { unique: true })
@Index("failed_jobs_uuid_unique", ["uuid"], { unique: true })
@Entity("failed_jobs", { schema: "public" })
export class FailedJobs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "uuid", unique: true, length: 255 })
  uuid: string;

  @Column("text", { name: "connection" })
  connection: string;

  @Column("text", { name: "queue" })
  queue: string;

  @Column("text", { name: "payload" })
  payload: string;

  @Column("text", { name: "exception" })
  exception: string;

  @Column("timestamp without time zone", {
    name: "failed_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  failedAt: Date;
}
