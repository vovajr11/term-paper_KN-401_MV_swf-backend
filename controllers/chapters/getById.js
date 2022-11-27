const { NotFound } = require('http-errors');

const { Chapter } = require('../../models');

const getById = async (req, res) => {
  const { id } = req.params;
  const chapter = await Chapter.findById(id);

  if (!chapter) {
    throw new NotFound(`Тема з id:${id} не знайдена`);
  }

  res.json({ status: 'success', code: 200, chapter });
};

module.exports = getById;
