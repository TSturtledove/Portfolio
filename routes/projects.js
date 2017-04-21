"use strict";

const {Router} = require("express");
const router = Router();

const { show } = require("../controllers/projectsC");

router.get("/projects", show);

module.exports = router;
