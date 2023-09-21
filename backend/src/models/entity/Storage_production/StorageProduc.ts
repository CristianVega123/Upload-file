import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Storage_Production {

    @PrimaryColumn({type: "varchar", length: 120})
    assets_id !: string 

    @Column({length: 20})
    format !: string

    @Column({length: 50})
    name_file_current ?: string

    @Column({
        nullable: true
    })
    name_file_original !: string

    @Column()
    url !: string

    @Column()
    secure_url !: string
}
