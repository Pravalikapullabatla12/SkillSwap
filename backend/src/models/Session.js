import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  student: String,
  teacher: String,
}, { timestamps: true });

export default mongoose.model("Session", sessionSchema);
