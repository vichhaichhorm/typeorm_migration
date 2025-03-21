import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";

@ChildEntity("tblPhoto")
export class Photo extends Content{
    @Column()
    size!:string;
}