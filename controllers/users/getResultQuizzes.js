const { User } = require('../../models');

const getResultQuizzes = async (req, res) => {
  const { id } = req.params;

  const result = await User.findById(id);

  res.json({
    status: 'success',
    code: 200,
    completedQuizzes: result.completedQuizzes,
  });
};

module.exports = getResultQuizzes;
