import { Request, Response, Application } from "express";
import { UserRepository } from "../repository/user.repository";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public addNewUser(app: Application): void {
    app.post("/addNewUser", async (req: Request, res: Response) => {
      try {
        const newUser = await this.userRepository.create(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({
          message: "Error creating user",
          error: (error as Error).message,
        });
      }
    });
  }

  public getListUser(app: Application): void {
    app.get("/getListUser", async (req: Request, res: Response) => {
      const pageNo = parseInt(req.query.pageNo as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 10;
      const skip = (pageNo - 1) * pageSize;

      try {
        const users = await this.userRepository.find({
          skip: skip,
          take: pageSize,
        });
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({
          message: "Error fetching users",
          error: (error as Error).message,
        });
      }
    });
  }

  public getUserById(app: Application): void {
    app.get("/getById/:id", async (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      try {
        const user = await this.userRepository.findById(id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        res.status(500).json({
          message: "Error fetching user",
          error: (error as Error).message,
        });
      }
    });
  }

//   public deleteUserById(app: Application): void {
//     app.delete("/deleteById/:id", async (req, res) => {
//       let id = Number(req.params.id);
//       if (isNaN(id)) {
//         return res.status(400).json({ message: "Invalid user ID" });
//       }

//       try {
//         const result = await this.userRepository.delete(id);
//         if (result.affected && result.affected > 0) {
//           res.status(200).json({ message: "User deleted successfully" });
//         } else {
//           res.status(404).json({ message: "User not found" });
//         }
//       } catch (error) {
//         res.status(500).json({
//           message: "Error deleting user",
//           error: (error as Error).message,
//         });
//       }
//     });
//   }
  
}
