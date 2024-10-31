import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { router } from "./routes/userRoutes.js";
import { User } from "./models/user.js";

const app = express();
dotenv.config();
app.use(express.json());

connectDB();

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
