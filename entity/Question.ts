import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";

@ChildEntity("tblQuestion")
export class Question extends Content {
  @Column()
  quescount!: string;
}
