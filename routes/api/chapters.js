const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiChapterSchema } = require('../../models/chapter');
const { chapters: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/', validation(joiChapterSchema), ctrlWrapper(ctrl.add));
router.get('/:id', ctrlWrapper(ctrl.getById));
router.delete('/:id', ctrlWrapper(ctrl.removeById));

module.exports = router;
