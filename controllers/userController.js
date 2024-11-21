import { User } from "../models/user.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); //Retrive all users withou filter, exclude password
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getAllUsers };
