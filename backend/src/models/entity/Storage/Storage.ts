import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Storage_Local {
  @PrimaryColumn({type: "varchar", length: 120})
  id_storage !: string

  @Column({length: 100})
  name_file_before !: string

  @Column({length: 100})
  name_file_save !: string

  @Column({length: 150})
  url !:string
}
