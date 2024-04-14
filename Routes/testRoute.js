const router = require('express').Router();
const isAuth = require('../Middlewares/isAuth');
const allowedToAdmin = require('../Middlewares/allowedToAdmin');
const {
    submitTestController,
    getTestController,
    getTestSubmittedByUserController,
    createNewTestController,
    addQuestionsToExistingTestController
} = require('../Controllers/testController');

router.post('/add', isAuth, allowedToAdmin, createNewTestController);

router.post('/submit/:testId', isAuth, submitTestController);

router.get('/all', isAuth, getTestController);

router.get('/your-tests', isAuth, getTestSubmittedByUserController);

router.patch('/add-questions/:testId', isAuth, allowedToAdmin, addQuestionsToExistingTestController);

module.exports = router;