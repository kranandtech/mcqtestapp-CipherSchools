const Test = require('../models/Test');
const Question = require('../models/Question');
const Response = require('../models/Response');

// Fetch all available tests
exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find().select('title description');
    res.status(200).json({ tests });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error fetching tests', error });
  }
};

// Start a specific test
exports.startTest = async (req, res) => {
  try {
    const testId = req.params.testId;
    const test = await Test.findById(testId).populate({
      path: 'questions',
      select: 'text options marks correctAnswer', 
    });

    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    res.status(200).json({ message: 'Test ready to start', test });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error starting test', error });
  }
};

// Submit test answers
exports.submitTest = async (req, res) => {
  const { answers } = req.body;
  const userId = req.userId;
  const testId = req.params.testId;

  try {
   
    const response = new Response({ userId, testId, answers });
    await response.save();
    res.status(201).json({ message: 'Test submitted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error submitting test', error });
  }
};

exports.getTestQuestions = async (req, res) => {
  try {
    const testId = req.params.testId;
    const test = await Test.findById(testId).populate({
      path: 'questions',
      select: 'text options marks',
    });

    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    res.status(200).json({ questions: test.questions });
  } catch (error) {
    console.error("Error fetching test questions:", error);
    res.status(500).json({ message: 'Error fetching test questions' });
  }
};
