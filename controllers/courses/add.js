const { Course } = require('../../models');

const add = async (req, res) => {
  const { _id: id, name, description, modules } = await Course.create(req.body);

  res.status(201).json({
    code: 201,
    course: { id, name, description, modules },
  });
};

module.exports = add;
