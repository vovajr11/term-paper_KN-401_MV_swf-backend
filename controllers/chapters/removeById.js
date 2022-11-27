const { NotFound } = require('http-errors');
const { Module, Chapter } = require('../../models');

const removeById = async (req, res) => {
  const { id } = req.params;

  const result = await Chapter.findByIdAndRemove(id);

  //   const modules = await Module.find({});

  //   console.log(modules, 'modules');

  if (!result) {
    throw new NotFound(`Тему id=${id} не знайдено`);
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'Тему видалено',
    data: {
      result,
    },
  });
};

module.exports = removeById;
