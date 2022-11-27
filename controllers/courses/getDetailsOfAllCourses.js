const { Course } = require('../../models');
const { prepareCoursesResponse } = require('../../middlewares');

const getDetailsOfAllCourses = async (req, res) => {
  const courses = await Course.find({}).populate({
    path: 'modules',
    select: ['name', 'description', 'chapters'],
  });

  res.json({
    status: 'success',
    code: 200,
    courses: prepareCoursesResponse(courses),
  });
};

module.exports = getDetailsOfAllCourses;
