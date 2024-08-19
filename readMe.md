# MCQ Test Application
# Project Overview
This project is a web-based platform that allows students to take MCQ (Multiple Choice Questions) tests. The platform manages user authentication, test administration, and automated test evaluation. The key features include:

- User Authentication
- Test Environment Setup
- MCQ Test Interface
- Test Submission
- Automated Test Evaluation via a Cron Job
- Email Notifications with Test Results
# Tech Stack
Frontend: React.js, CSS
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ORM)
- Authentication: JWT-based
- Email Service: Nodemailer
- Cron Jobs: node-cron
# Features
1. User Authentication:
Secure login system using JWT for session management.
2. Test Environment Setup:
The test start page requests permission to access the camera and microphone before the test begins.
The camera feed is displayed on the test interface, and users can proceed only after granting permissions.
3. MCQ Test Interface:
The test interface is user-friendly, displaying questions and options in a responsive layout.
Users can navigate between questions freely, with answered questions highlighted in green and unanswered questions in red.
On test submission, the camera stream is stopped, and the answers are sent to the backend.
4. Test Submission and Automated Evaluation:
Upon submission, answers are stored in the database.
A cron job runs every hour to evaluate the submitted tests, calculate scores, and send results to the users.
5. Email Notifications:
Test results are sent via email using Nodemailer, with a predefined email template.
# How to Run the Project
- git clone https://github.com/kranandtech/mcqtestapp-CipherSchools.git
- cd mcqtestapp-CipherSchools
# Install Dependencies for Both Client and Server and Run client and server
# Client
- cd client
- npm install
- npm start
# Server
- cd server
- npm install
- npm start

The application will be available at http://localhost:3000.
# Testing
- Login with email and password
- email: ak25517@gmail.com
- Password: password123