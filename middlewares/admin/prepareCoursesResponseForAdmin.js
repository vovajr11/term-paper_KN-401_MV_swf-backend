const prepareCoursesResponseForAdmin = courses => {
  return courses.map(course => {
    const { _id: id, name, description, modules, isVisible } = course;

    const numberOfModules = modules.length;

    return { id, name, description, numberOfModules, isVisible, modules };
  });
};

module.exports = prepareCoursesResponseForAdmin;
