const Test = require('../Models/Test');
const TestResponse = require('../Models/testResponse');
const Course = require('../Models/Course');

const submitTestController = async (req, res) => {
    try {
        const testId = req.params.testId;
        const responses = req.body;

        const test = await Test.findById({ _id: testId });
        let responsesToBeSubmitted = [];

        for (const currentQuestion of responses) {
            const question = currentQuestion.question;
            const answer = currentQuestion.answer;
            const catagory = currentQuestion.category;
            const questionNumber = currentQuestion.questionNumber;
            responsesToBeSubmitted.push({ questionNumber, catagory, question, answer });
        }

        const responseOfUser = await TestResponse({
            response: responsesToBeSubmitted,
            respondedBy: req.user.email
        });
        await responseOfUser.save();
        let correctResponses = test.questions;
        if (correctResponses.length !== responses.length) {
            return res.status(400).send({
                success: false
            });
        }

        correctResponses.sort((a, b) => a.questionNumber - b.questionNumber);
        responses.sort((a, b) => a.questionNumber - b.questionNumber);

        let score = 0;
        let privateQuestions = 0;
        let governmentQuestions = 0;
        let entrepreneurQuestions = 0;
        for (let index = 0; index < correctResponses.length; index++) {
            const questionNumber = correctResponses[index].questionNumber;
            const answer = correctResponses[index].answer;
            const questionCatagory = responses[index].category;

            if (responses[index].answer === answer) {
                score++;
                if (questionCatagory === "Private") {
                    privateQuestions++;
                } else if (questionCatagory === "Government") {
                    governmentQuestions++;
                } else if (questionCatagory === "Entrepreneur") {
                    entrepreneurQuestions++;
                }
            }
        }

        const mostCorrectQuestionsCatagory = Math.max(privateQuestions, governmentQuestions, entrepreneurQuestions);
        let domainsToBeRecommended = [];

        if (mostCorrectQuestionsCatagory === privateQuestions) {
            domainsToBeRecommended.push("Private");
        }
        if (mostCorrectQuestionsCatagory === governmentQuestions) {
            domainsToBeRecommended.push("Government");
        }
        if (mostCorrectQuestionsCatagory === entrepreneurQuestions) {
            domainsToBeRecommended.push("Entrepreneur");
        }

        const coursesRecommended = await Course.find({
            domainName: {
                $in: domainsToBeRecommended
            }
        });

        res.status(200).send({
            success: true,
            message: 'Your response was saved',
            score,
            domains: domainsToBeRecommended,
            coursesRecommended
        });
    } catch (error) {
        res.status(501).send({
            success: false,
            message: 'Something went wrong while submitting your test',
            error: error.message
        });
    }
}

// As of now, we only have one test
const getTestController = async (req, res) => {
    try {
        const all = await Test.find();
        const test = all[0];

        let questions = [];
        for (const allQuestion of test.questions) {
            const questionNumber = allQuestion.questionNumber;
            const category = allQuestion.category;
            const question = allQuestion.question;
            const answer = allQuestion.answer;
            questions.push({ questionNumber, category, question, answer });
        }
        res.status(200).send({
            success: true,
            questions,
            testId: test._id
        });
    } catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        });
    }
}

const getTestSubmittedByUserController = async (req, res) => {
    try {
        const yourTests = await TestResponse.find({ respondedBy: req.user.email }, {
            __v: 0,
            respondedBy: false
        });
        res.status(200).send({
            success: true,
            tests: yourTests
        });
    } catch (error) {
        res.status(501).send({
            success: false,
            message: 'Something went wrong while fetching your tests'
        })
    }
}

const createNewTestController = async (req, res) => {
    try {
        const questions = req.body;
        let questionsToBeInserted = [];

        for (const currentQuestion of questions) {
            const question = currentQuestion.question;
            const answer = currentQuestion.answer;
            const questionNumber = currentQuestion.questionNumber;
            const category = currentQuestion.category;
            questionsToBeInserted.push({ questionNumber, category, question, answer });
        }

        const newTest = await Test({
            questions: questionsToBeInserted
        });

        await newTest.save();
        res.status(201).send({
            success: true,
            message: 'Test added successfully'
        });
    } catch (error) {
        console.log('Error msg : ' + error.message);
        res.status(501).send({
            success: false
        });
    }
}

const addQuestionsToExistingTestController = async (req, res) => {
    try {
        const testId = req.params.testId;
        const questions = req.body;
        let questionsToBeInserted = [];

        for (const currentQuestion of questions) {
            const question = currentQuestion.question;
            const answer = currentQuestion.answer;
            const category = currentQuestion.category;
            const questionNumber = currentQuestion.questionNumber;
            questionsToBeInserted.push({ questionNumber, category, question, answer });
        }

        await Test.findByIdAndUpdate({ _id: testId }, {
            $push: {
                questions: questionsToBeInserted
            }
        });

        const updatedTest = await Test.findById({ _id: testId });
        res.status(201).send({
            success: true,
            message: 'Test updated successfully',
            updatedTest
        });

    } catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    submitTestController,
    getTestController,
    getTestSubmittedByUserController,
    createNewTestController,
    addQuestionsToExistingTestController
}
