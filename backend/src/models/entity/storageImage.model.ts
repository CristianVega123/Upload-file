import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Storage_Image {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  age!: number;
}
