import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from headers
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.userId = decoded.id; // retrieves the user ID from the token payload and attach it to the req
    //Also the next middleware or route handler can directly use "req.userId" without needing to decode the token again

    next(); //Call the next function in "router"
  });
};

export { authMiddleware };
