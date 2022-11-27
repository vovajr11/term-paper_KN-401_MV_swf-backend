const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Користувач з ${email} вже існує`);
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ name, email, password: hashPassword });
  const userId = result._id;

  const payload = { id: userId };
  const token = jwt.sign(payload, SECRET_KEY); // добавити таймер на валідність токену

  await User.findByIdAndUpdate(userId, { token });

  res.status(201).json({
    code: 201,
    data: {
      user: {
        id: userId,
        email: result.email,
        name: result.name,
        role: result.role,
        completedQuizzes: result.completedQuizzes,
      },
      token,
    },
  });
};

module.exports = register;
