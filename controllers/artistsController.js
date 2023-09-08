const pool = require("../config/db");

const getArtists = (req, res) => {
  const sqlQuery = "SELECT * FROM artist ORDER BY artist_id DESC";

  pool.query(sqlQuery, (err, results) => {
    // const data = { results };
    if (err) throw err;
    res.status(200).json(results);
  });
};

module.exports = {
  getArtists,
};
