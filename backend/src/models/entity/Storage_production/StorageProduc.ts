import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Storage_Production {

    @PrimaryGeneratedColumn()
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
