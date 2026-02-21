import express from "express";

const app = express();
const PORT = 5001;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello nigga!" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// GET, POST, PUT, DELETE
// http://localhost:5001/
