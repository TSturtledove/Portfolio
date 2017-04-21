"use strict";

const {Router} = require("express");
const router = Router();

router.use(require("./home"));
router.use(require("./about"));
router.use(require("./projects"));

module.exports = router;
