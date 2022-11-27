const { Module, Chapter } = require('../../models');

const add = async (req, res) => {
  const moduleId = req.body.moduleId;

  const { _id, name, content } = await Chapter.create(req.body);

  await Module.findByIdAndUpdate(
    moduleId,
    {
      $push: { chapters: { _id, name } },
    },
    {
      new: true,
    },
  );

  res.status(201).json({
    code: 201,
    chapter: { _id, name, content },
  });
};

module.exports = add;
