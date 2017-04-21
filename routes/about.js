"use strict";

const {Router} = require("express");
const router = Router();

const { show } = require("../controllers/aboutC");

router.get("/about", show);

module.exports = router;
