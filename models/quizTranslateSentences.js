const { Schema, model } = require('mongoose');
const Joi = require('joi');

const quizSchema = Schema({
  name: { type: String, required: true },
  quizType: { type: String, required: true },
  questions: [
    {
      sentenceToBeTranslated: { type: String, required: true },
      translatedSentence: { type: String },
    },
  ],
});

const joiQuizTranslateSentencesSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'Введіть назву вікторини!',
    'string.min': `Назва вікторини мінімум {#limit} символи!`,
  }),
  quizType: Joi.string().required(),
  questions: Joi.array().min(1).required().messages({
    'array.min': `Квіз повинен містити мінімум {#limit} питання!`,
  }),
  moduleId: Joi.string().required().messages({
    'string.empty': 'Додайте назву модуля!',
  }),
});

const QuizTranslateSentencesModel = model(
  'quiz-translate-sentences',
  quizSchema,
);

module.exports = {
  joiQuizTranslateSentencesSchema,
  QuizTranslateSentencesModel,
};
