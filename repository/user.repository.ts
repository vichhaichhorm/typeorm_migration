import { DeleteResult, Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.repository.create(userData);
    return await this.repository.save(newUser);
  }

  async find(options: { skip: number; take: number }): Promise<User[]> {
    return await this.repository.find({
      skip: options.skip,
      take: options.take,
    });
  }

  async findById(id: number): Promise<User | null> {
    return await this.repository.findOneBy({ id });
  }

//   async deleteUserById(id: number): Promise<DeleteResult> {
//     return this.delete(id); 
//   }
}
