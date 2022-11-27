const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiModuleSchema } = require('../../models/module');
const { modules: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/', validation(joiModuleSchema), ctrlWrapper(ctrl.add));

module.exports = router;
