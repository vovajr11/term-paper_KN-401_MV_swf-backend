const { Unauthorized } = require('http-errors');
const { User } = require('../../models');

const saveTheResultOfTheQuiz = async (req, res) => {
  const userId = req.body.userId;
  const { quizName, quizType, quizId, score, answers } = req.body;

  const findQuiz = await User.findById(userId).then(data =>
    data.completedQuizzes.find(item => item.quizId === quizId),
  );

  if (findQuiz === undefined) {
    await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          completedQuizzes: { quizName, quizType, quizId, score, answers },
        },
      },
      {
        new: true,
      },
    );
  } else {
    await User.updateOne(
      {
        _id: userId,
        'completedQuizzes.quizId': quizId,
      },
      {
        $set: {
          'completedQuizzes.$.answers': answers,
        },
      },
    );
  }

  res.status(201).json({
    code: 201,
  });
};

module.exports = saveTheResultOfTheQuiz;
