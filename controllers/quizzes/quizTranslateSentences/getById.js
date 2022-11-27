const { NotFound } = require('http-errors');
const { QuizTranslateSentencesModel } = require('../../../models');

const getById = async (req, res) => {
  const { id } = req.params;

  const quiz = await QuizTranslateSentencesModel.findById(id);

  res.json({ status: 'success', code: 200, questions: quiz.questions });
};

module.exports = getById;
