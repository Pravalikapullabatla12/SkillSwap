import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Skills
export const getSkills = () => API.get("/skills");
export const addSkill = (skill) => API.post("/skills", skill);

// Sessions
export const getSessions = () => API.get("/sessions");
export const addSession = (session) => API.post("/sessions", session);

// Users
export const registerUser = (user) => API.post("/users/register", user);
export const getUsers = () => API.get("/users");
