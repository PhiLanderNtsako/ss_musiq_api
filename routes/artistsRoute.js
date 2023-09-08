const express = require("express");
const router = express.Router();
const { getArtists } = require("../controllers/artistsController");

router.get("/", getArtists);

module.exports = router;
