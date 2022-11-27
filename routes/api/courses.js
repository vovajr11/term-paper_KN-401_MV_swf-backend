const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiCourseSchema } = require('../../models/course');
const { courses: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/courses-details', ctrlWrapper(ctrl.getDetailsOfAllCourses));
router.get('/courses-details-admin', ctrlWrapper(ctrl.getCourseForAdmin));
router.get('/:id', ctrlWrapper(ctrl.getById));
router.patch(
  '/switch-visibility-course/:id',
  ctrlWrapper(ctrl.switchVisibilityCourse),
);
router.post('/', validation(joiCourseSchema), ctrlWrapper(ctrl.add));

module.exports = router;
