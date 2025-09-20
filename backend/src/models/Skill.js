import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  teacher: String,
}, { timestamps: true });

export default mongoose.model("Skill", skillSchema);
