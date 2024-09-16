import express from "express";

const app = express();

app.get("/code-warrior", () => {
  console.log("This is coming from code-warriors route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
