const getCurrent = async (req, res) => {
  const { id, name, email, role, completedQuizzes } = req.user;

  res.json({
    status: 'succes',
    code: 200,
    data: {
      id,
      name,
      email,
      role,
      completedQuizzes,
    },
  });
};

module.exports = getCurrent;
