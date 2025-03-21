import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblCard")
export class Card extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    type!: string;

    @Column()
    category!:string;
}