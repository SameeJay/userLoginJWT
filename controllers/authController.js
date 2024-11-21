import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    /*Hashing the password (The salt rounds, which determine the complexity of the hashing process. 
    Higher values increase security but take longer to compute.)*/
    const newUser = new User({ username, password: hashedPassword }); //Creating a new user
    await newUser.save(); //Save the user
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body; //request body destrcutured.
  try {
    const user = await User.findOne({ username }); //query the database for "username"
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials (User Name)" });
    }

    const isMatch = await bcrypt.compare(password, user.password); //"password" is hashed and then compared with "user.password"
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials (Password)" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    }); //JWT is generated with Payload containing user's unique ID
    res.status(200).json({ token, message: "User Login Successful !" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { register, login };
