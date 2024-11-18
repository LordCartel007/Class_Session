import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // USING MINUS SIGN TO EXCLUDE THE ONLY PASSWORD FIELD WITHOUT THE MINUS SIGN IT WILL INCLUDE ONLY THE PASSWORD FIELD
    const user = await User.findById(payload._id).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ message: "unauthorized request: user not found" });
    }
    //Add the user to the request object so that it can be accessed in the route handler
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export { authenticateUser };
