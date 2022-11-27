const { Course, Module } = require('../../models');

const add = async (req, res) => {
  const courseId = req.body.courseId;

  console.log(req.body.courseId, '- req.body');

  const { _id, name, description } = await Module.create(req.body);

  await Course.findByIdAndUpdate(
    courseId,
    {
      $push: { modules: _id },
    },
    {
      new: true,
    },
  );

  res.status(201).json({
    code: 201,
    module: { _id, name, description },
  });
};

module.exports = add;
