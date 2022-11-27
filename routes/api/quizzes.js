const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');

const { quizzes: ctrl } = require('../../controllers');
const {
  joiQuizChooseTheCorrectAnswer,
} = require('../../models/quizChooseTheCorrectAnswer');
const {
  joiQuizTranslateSentencesSchema,
} = require('../../models/quizTranslateSentences');

const router = express.Router();

router.get('/get-quizzes', ctrlWrapper(ctrl.getQuizzes));
router.get(
  '/get-quizzes-by-module-id/:id',
  ctrlWrapper(ctrl.getQuizzesByModuleId),
);

// -------------- QuizChooseTheCorrectAnswer --------------
router.get(
  '/get-quiz-choose-the-correct-answer-by-id/:id',
  ctrlWrapper(ctrl.getQuizChooseTheCorrectAnswerById),
);

router.post(
  '/add-quiz-choose-the-correct-answer',
  validation(joiQuizChooseTheCorrectAnswer),
  ctrlWrapper(ctrl.addQuizChooseTheCorrectAnswer),
);
// ----------------------------------------------------------

// ---------- QuizTranslateSentencesSchema ----------
router.get(
  '/get-quiz-translate-sentences-by-id/:id',
  ctrlWrapper(ctrl.getQuizTranslateSentencesById),
);

router.post(
  '/add-quiz-translate-sentences',
  // validation(joiQuizTranslateSentencesSchema),
  ctrlWrapper(ctrl.addQuizTranslateSentences),
);
// ----------------------------------------------------------

module.exports = router;
