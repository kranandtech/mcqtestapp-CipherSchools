const express = require('express');
const { getTestQuestions, startTest, submitTest, getTests } = require('../controllers/testController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Fetch all available tests
router.get('/tests', authMiddleware, getTests);

// Fetch questions for a specific test
router.get('/:testId/questions', authMiddleware, getTestQuestions);

// Start a specific test
router.get('/start/:testId', authMiddleware, startTest);

// Submit a test
router.post('/submit/:testId', authMiddleware, submitTest);

module.exports = router;
