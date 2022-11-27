const { Schema, model } = require('mongoose');
const Joi = require('joi');

const courseSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  modules: [{ type: Schema.Types.ObjectId, ref: 'module' }],
  isVisible: { type: Boolean, default: false },
});

const joiCourseSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

const Course = model('course', courseSchema);

module.exports = { joiCourseSchema, Course };
