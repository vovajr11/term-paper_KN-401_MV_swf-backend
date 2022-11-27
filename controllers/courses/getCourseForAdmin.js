const { Course } = require('../../models');
const { prepareCoursesResponseForAdmin } = require('../../middlewares/admin');

const getCourseForAdmin = async (req, res) => {
  const courses = await Course.find({}).populate({
    path: 'modules',
    select: ['name', 'description', 'chapters'],
  });

  res.json({
    status: 'success',
    code: 200,
    courses: prepareCoursesResponseForAdmin(courses),
  });
};

module.exports = getCourseForAdmin;
