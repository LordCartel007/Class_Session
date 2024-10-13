import express from "express";

const app = express();

// general middle ware
app.use((req, res, next) => {
  console.log("this is the general middleware");
  next();
});

app.get("/code-warrior", (req, res) => {
  res.send("welcome to code-warriors");
});

app.post("/test-1", (req, res) => {
  res.send("welcome to code-warriors for test");
});

app.put(
  "/route-with-middlewares",
  (req, res, next) => {
    console.log("this is the first middleware");
    next();
  },
  (req, res, next) => {
    console.log("this is the second 1middleware");
    next();
  },
  (req, res) => {
    res.send("this is coming from the last function called endpoint");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// if theres error print 404
app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});
