import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { contactRoutes } from "./routes/contacts.route";
import { userRoutes } from "./routes/users.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/contacts", contactRoutes);
app.use("/users", userRoutes);

app.use("/login");

export default app;