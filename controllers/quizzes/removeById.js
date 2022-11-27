const { NotFound } = require('http-errors');

const { Quiz, Module } = require('../../models');

const removeById = async (req, res) => {
  const { quizId, moduleId } = req.body;

  const result = await Quiz.findByIdAndRemove(quizId);

  await Module.updateOne(
    { _id: moduleId },
    {
      $pull: {
        quizzes: { _id: quizId },
      },
    },
    { new: true },
  );

  if (!result) {
    throw new NotFound(`Квіз з id: ${quizId} не знайдено!`);
  }

  res.json({
    code: 200,
  });
};

module.exports = removeById;
