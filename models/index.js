const { Product } = require('./product');
const { User } = require('./user');
const { Course } = require('./course');
const { Module } = require('./module');
const { Chapter } = require('./chapter');
const {
  QuizChooseTheCorrectAnswerModel,
} = require('./quizChooseTheCorrectAnswer');
const { QuizTranslateSentencesModel } = require('./quizTranslateSentences');

module.exports = {
  Product,
  User,
  Course,
  Module,
  Chapter,
  QuizChooseTheCorrectAnswerModel,
  QuizTranslateSentencesModel,
};
