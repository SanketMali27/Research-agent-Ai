const express = require("express");
const { runResearchPipeline } = require("../controllers/researchController");

const router = express.Router();

router.post("/", runResearchPipeline);

module.exports = router;
