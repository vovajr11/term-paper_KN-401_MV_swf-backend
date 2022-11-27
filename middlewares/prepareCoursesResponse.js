const prepareCoursesResponse = courses => {
  return courses.map(course => {
    const { _id: id, name, description, modules, isVisible } = course;

    const numberOfModules = modules.length;

    if (isVisible) {
      return { id, name, description, numberOfModules, isVisible, modules };
    } else {
      return { id, name, description, numberOfModules, isVisible };
    }
  });
};

module.exports = prepareCoursesResponse;
