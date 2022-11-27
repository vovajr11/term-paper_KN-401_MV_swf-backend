const { NotFound } = require('http-errors');
const { QuizChooseTheCorrectAnswerModel } = require('../../../models');

const getById = async (req, res) => {
  const { id } = req.params;

  const quiz = await QuizChooseTheCorrectAnswerModel.findById(id);

  res.json({ status: 'success', code: 200, data: quiz });
};

module.exports = getById;
