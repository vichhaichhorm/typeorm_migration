import express from "express";

import { UserController } from "./controllers/user.controller";
import { AppDataSource } from "./data-source";

class App {
  public app: express.Application;
  public userController!: UserController;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    AppDataSource.initialize()
      .then(() => {
        console.log("Database connected successfully");
        this.userController = new UserController();
        this.getUserController();
      })
      .catch((error) => console.error("Database connection error:", error));
  }

  private getUserController() {
    this.userController.addNewUser(this.app);
    this.userController.getListUser(this.app);
    this.userController.getUserById(this.app);
    // this.userController.deleteUserById(this.app);
  }
}

const appInstance = new App();
appInstance.app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
