const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const helpers = require('./helpers/data-helpers')
app.use(express.json())
const data = require("./db/data");

//Check that the server is running locally:
app.listen(port, () => console.log(`Now listening on port ${port}`));

app.post('/preferences', (req, res) => {
  const allSongs = data.songs;

  //Filter all songs in database to return only songs that match preference criteria:
  const playlistFiltered = helpers.filterPlaylist(req.body.preferences, allSongs)

  /* If there is only one song returned from the filtered playlist, return the song. 
   Otherwise, randomize the filtered playlist array so that a different song is returned each time. */
  playlistFiltered.length > 1 ? res.json(helpers.randomizePlaylist(playlistFiltered)[0]) : res.json(playlistFiltered[0])
})
