// const removeById = require('./removeById');
const getQuizzes = require('./getQuizzes');
const getQuizzesByModuleId = require('./getQuizzesByModuleId');

const addQuizChooseTheCorrectAnswer = require('./quizChooseTheCorrectAnswer/add');
const getQuizChooseTheCorrectAnswerById = require('./quizChooseTheCorrectAnswer/getById');

const addQuizTranslateSentences = require('./quizTranslateSentences/add');
const getQuizTranslateSentencesById = require('./quizTranslateSentences/getById');

module.exports = {
  // removeById,
  getQuizzes,
  getQuizzesByModuleId,

  addQuizChooseTheCorrectAnswer,
  getQuizChooseTheCorrectAnswerById,

  addQuizTranslateSentences,
  getQuizTranslateSentencesById,
};
