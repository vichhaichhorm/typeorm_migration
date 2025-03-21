import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column:{type: 'varchar'}})
export abstract class Content{ 
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    desc!:string;
}