const express = require("express");
const router = express.Router();
const {
  getMusic,
  getNewRelease,
  getAlbums,
  getAlbumsLimit,
  getSingles,
  getSinglesLimit,
  getMusicSingle,
  getAlbumSingles,
} = require("../controllers/musicController");

router.get("/", getMusic);
router.get("/new-release", getNewRelease);
router.get("/albums", getAlbums);
router.get("/album-singles/:musiq_id", getAlbumSingles);
router.get("/albums-paginate-4", getAlbumsLimit);
router.get("/singles", getSingles);
router.get("/singles-paginate-6", getSinglesLimit);
router.get("/:artistName/:musiqTitle", getMusicSingle);

module.exports = router;
