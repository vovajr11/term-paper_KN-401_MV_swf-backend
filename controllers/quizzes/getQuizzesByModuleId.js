const { NotFound } = require('http-errors');
const { Module } = require('../../models');

const getQuizzesByModuleId = async (req, res) => {
  const { id } = req.params;

  const data = await Module.findById(id);

  res.json({ status: 'success', code: 200, quizzes: data.quizzes });
};

module.exports = getQuizzesByModuleId;
