const { Schema, model } = require('mongoose');
const Joi = require('joi');

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    completedQuizzes: [
      {
        quizName: { type: String, required: true },
        quizType: { type: String, required: true },
        quizId: { type: String, required: true },
        score: { type: String, required: true },
        answers: [],
      },
    ],
    role: {
      type: String,
      enum: ['admin', 'student'],
      default: 'student',
      required: true,
    },
    token: { type: String, default: null },
  },
  { versionKey: false, timestamps: true },
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const User = model('user', userSchema);

module.exports = { User, joiRegisterSchema, joiLoginSchema };
