import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from headers
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.userId = decoded.id; // Save user ID for use in routes
    next();
  });
};

export { authMiddleware };