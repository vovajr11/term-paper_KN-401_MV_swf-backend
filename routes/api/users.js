const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
// const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

const router = express.Router();

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));
router.get('/get-result-quizzes/:id', ctrlWrapper(ctrl.getResultQuizzes));
router.put('/save-result-quiz', ctrlWrapper(ctrl.saveTheResultOfTheQuiz));

module.exports = router;
