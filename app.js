import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { router } from "./routes/userRoutes.js";
import { User } from "./models/user.js";

const app = express();
dotenv.config();
app.use(express.json());

connectDB();  //Conntect the data base first.

app.use("/", router); //Check for the route using userRouter.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
