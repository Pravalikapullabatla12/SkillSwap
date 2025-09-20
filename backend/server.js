import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // This must be at the very top

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("📌 MONGO_URI:", MONGO_URI);

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is undefined. Check your .env file!");
  process.exit(1);
}

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Routes
import userRoutes from "./src/routes/userRoutes.js";
import skillRoutes from "./src/routes/skillRoutes.js";
import sessionRoutes from "./src/routes/sessionRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/", (req, res) => res.send("SkillSwap Backend Running 🚀"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
