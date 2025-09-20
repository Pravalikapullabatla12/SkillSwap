import express from "express";
import { getSessions, addSession, updateSession, deleteSession } from "../controllers/sessionController.js";

const router = express.Router();

router.get("/", getSessions);
router.post("/", addSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);

export default router;
