import jwt from "jsonwebtoken";
const generateEmailVerificationToken = (userPayload) => {
  const token = jwt.sign(userPayload, process.env.EMAIL_VERIFY_SECRET, {
    expiresIn: "10m",
  });
  return token;
};

const generateAccessToken = (userPayload) => {
  const token = jwt.sign(userPayload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export { generateEmailVerificationToken, generateAccessToken };
