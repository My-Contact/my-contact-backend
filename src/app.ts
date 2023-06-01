import express, { Application } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { contactRoutes } from "./routes/contacts.route";
import { userRoutes } from "./routes/users.route";
import { handleErrors } from "./errors";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
//app.use("/contacts", contactRoutes);

//app.use("/login");
app.use(handleErrors);

export default app;
