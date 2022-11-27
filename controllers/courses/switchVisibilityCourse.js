const { NotFound } = require('http-errors');

const { Course } = require('../../models');

const switchVisibilityCourse = async (req, res) => {
  const { id } = req.params;
  const { isVisible } = req.body;

  console.log(req.body, 'req.body');

  console.log(isVisible, 'isVisible');

  const course = await Course.findByIdAndUpdate(
    id,
    { isVisible },
    { new: true },
  );

  if (!course) {
    throw new NotFound(`Курс з id:${id} не знайдено`);
  }

  res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = switchVisibilityCourse;
