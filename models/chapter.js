const { Schema, model } = require('mongoose');
const Joi = require('joi');

const chapterSchema = Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
});

const joiChapterSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'Введіть назву вікторини!',
    'string.min': `Назва вікторини мінімум {#limit} символи!`,
  }),
  content: Joi.string().min(20).required().messages({
    'string.min': `Контент повинен мати мінімум: {#limit} символів!`,
  }),
  moduleId: Joi.string().required().messages({
    'string.empty': 'Додайте назву модуля!',
  }),
});

const Chapter = model('chapter', chapterSchema);

module.exports = { joiChapterSchema, Chapter };
