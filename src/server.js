import express from "express";
import moviesRoutes from "./routes/moviesRoutes.js";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

config();
connectDB();

const app = express();
const PORT = 5001;

app.use("/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// handle error cases
process.on("unhandledRejection", (err) => {
  console.error(err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("uncaughtException", async (err) => {
  console.error(err);
  await disconnectDB();
  process.exit(1);
});

process.on("SIGTERM", (err) => {
  console.error(err);
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
