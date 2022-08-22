import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("book", { schema: "public" })
export class Book {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title" })
  title: string;

  @Column("character varying", { name: "genre" })
  genre: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("character varying", { name: "author" })
  author: string;

  @Column("character varying", { name: "publisher" })
  publisher: string;

  @Column("integer", { name: "pages" })
  pages: number;

  @Column("character varying", { name: "image_url" })
  imageUrl: string;
}
