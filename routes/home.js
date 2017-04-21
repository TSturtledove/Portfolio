"use strict";

const {Router} = require("express");
const router = Router();

const { show } = require("../controllers/homeC");

router.get("/", show);

module.exports = router;
