const { Schema, model } = require('mongoose');
const Joi = require('joi');

const moduleSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  chapters: [
    {
      id: { type: String, ref: 'chapter' },
      name: { type: String },
    },
  ],
  quizzes: [
    {
      id: { type: String, ref: 'quiz' },
      name: { type: String },
      quizType: { type: String },
    },
  ],
});

const joiModuleSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  courseId: Joi.string().required(),
});

const Module = model('module', moduleSchema);

module.exports = { joiModuleSchema, Module };
