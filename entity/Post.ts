import { ChildEntity, Column} from "typeorm";
import { Content } from "./Content";

@ChildEntity("tblPost")
export class Post extends Content{
    @Column()
    viewcount!:string;
}