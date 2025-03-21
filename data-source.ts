import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [],
  migrations: ["migration/*.ts"],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "false",
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => console.log("Database connection error:", error));
