const pool = require("../config/db");

const getMusic = (req, res) => {
  const sqlQuery =
    "SELECT * FROM (artist INNER JOIN musiq ON artist.artist_id = musiq.artist_id) WHERE musiq.musiq_type = 'Single' ORDER BY musiq.musiq_id DESC; ";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

const getMusicSingle = (req, res) => {
  const sqlQuery =
    "SELECT * FROM ((artist INNER JOIN  musiq ON artist.artist_id = musiq.artist_id) INNER JOIN musiq_link ON musiq.musiq_id = musiq_link.musiq_id) WHERE musiq.artist_id = artist.artist_id AND musiq.musiq_title_slug = ? AND artist.artist_name_slug = ? LIMIT 1";

  pool.query(
    sqlQuery,
    [req.params.musiqTitle, req.params.artistName],
    (err, results) => {
      // const data = { results };
      if (err) throw err;
      res.status(200).json(results);
    }
  );
};

const getNewRelease = (req, res) => {
  const sqlQuery =
    "SELECT * FROM ((artist INNER JOIN  musiq ON artist.artist_id = musiq.artist_id) INNER JOIN album ON musiq.musiq_id = album.musiq_id) WHERE musiq.musiq_type = 'Album' || musiq.musiq_type = 'Single' ORDER BY musiq.musiq_id DESC LIMIT 1";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

const getAlbums = (req, res) => {
  const sqlQuery =
    "SELECT * FROM ((artist INNER JOIN  musiq ON artist.artist_id = musiq.artist_id) INNER JOIN album ON musiq.musiq_id = album.musiq_id) WHERE musiq.musiq_type = 'Album'";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

const getAlbumSingles = (req, res) => {
  const sqlQuery =
    "SELECT * FROM musiq INNER JOIN album_single ON album_single.musiq_id = musiq.musiq_id WHERE album_single.album_id = (SELECT album_id FROM album WHERE musiq_id = ?)";

  pool.query(sqlQuery, [req.params.musiq_id], (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

const getAlbumsLimit = (req, res) => {
  const sqlQuery =
    "SELECT * FROM ((artist INNER JOIN  musiq ON artist.artist_id = musiq.artist_id) INNER JOIN album ON musiq.musiq_id = album.musiq_id) WHERE musiq.musiq_type = 'Album' ORDER BY RAND() LIMIT 4";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

const getSingles = (req, res) => {
  const sqlQuery =
    "SELECT * FROM musiq, artist WHERE musiq.artist_id = artist.artist_id AND musiq.musiq_type = 'Single' ORDER BY musiq_id DESC";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

const getSinglesLimit = (req, res) => {
  const sqlQuery =
    "SELECT * FROM musiq, artist WHERE musiq.artist_id = artist.artist_id AND musiq.musiq_type = 'Single' ORDER BY RAND()  LIMIT 6";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

module.exports = {
  getMusic,
  getNewRelease,
  getAlbums,
  getAlbumsLimit,
  getSingles,
  getSinglesLimit,
  getMusicSingle,
  getAlbumSingles,
};
