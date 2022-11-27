const { NotFound } = require('http-errors');

const { Course } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id).populate({
    path: 'modules',
    select: ['name', 'description', 'chapters', 'quizzes'],
  });

  if (!course) {
    throw new NotFound(`Курс з id:${id} не знайдено`);
  }

  res.json({ status: 'success', code: 200, course });
};

module.exports = getById;
