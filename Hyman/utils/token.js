import jwt from "jsonwebtoken";
const generateEmailVerificationToken = (userPayload) => {
  const token = jwt.sign(userPayload, process.env.EMAIL_VERIFY_SECRET, {
    expiresIn: "5m",
  });
  return token;
};

export { generateEmailVerificationToken };
