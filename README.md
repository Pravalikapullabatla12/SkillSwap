# SkillSwap
SkillSwap

A MERN Stack platform for skill sharing and session management.

Table of Contents

Overview

Features

Technologies

Installation

Usage

API Endpoints

Contributing

License

Overview

SkillSwap is a full-stack web application built using MongoDB, Express.js, React, and Node.js (MERN). It allows users to:

Share and explore skills.

Schedule and manage skill sessions.

Connect with other learners and mentors.

This project is ideal for developers looking to practice MERN stack development with real-world functionality.

Features

User authentication and profile management

Skill creation, viewing, and search

Session scheduling and tracking

Responsive frontend using React

RESTful API backend with Node.js and Express

Data storage with MongoDB

Technologies

Frontend: React, JavaScript, HTML5, CSS3, Vite

Backend: Node.js, Express.js

Database: MongoDB

Other Tools: Git, GitHub, npm, dotenv, CORS

Installation

Clone the repository:

git clone https://github.com/Pravalikapullabatla12/SkillSwap.git

Navigate to the backend and frontend folders and install dependencies:

cd SkillSwap/backend
npm install

cd ../frontend
npm install

Create a .env file in the backend folder:

MONGO_URI=mongodb://localhost:27017/SkillSwap
PORT=5000

Start the backend server:

cd backend
node server.js

Start the frontend server:

cd frontend
npm run dev

API Endpoints

GET /api/users – Get all users

POST /api/users – Register a new user

GET /api/skills – Get all skills

POST /api/skills – Add a new skill

GET /api/sessions – Get all sessions

POST /api/sessions – Schedule a session

Full API documentation can be added here later.

Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

License

This project is licensed under the MIT License.

Keywords

MERN Stack, Node.js, Express.js, React, MongoDB, Full Stack, Skill Sharing, Session Management, JavaScript, Web Development
