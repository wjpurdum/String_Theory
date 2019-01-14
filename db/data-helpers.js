module.exports = {
  filterPlaylist: (preferences, playlist) => {
    //filter for bluegrass vs folk
    if (preferences.indexOf('bluegrass') !== -1) {
      playlist = playlist.filter(song => {
        return song.genre === 1
      })
    } else {
      playlist = playlist.filter(song => {
        return song.genre === 2
      })
    }
    //filter for modern i.e. album released after 2000
    if (preferences.indexOf('modern') !== -1) {
      playlist = playlist.filter(song => {
        return song.releaseYear >= 1990
      })
    } else {
      playlist = playlist.filter(song => {
        return song.releaseYear < 1990
      })
    }
    //filter for female singers
    if (preferences.indexOf('female') !== -1) {
      playlist = playlist.filter(song => {
        return song.femaleVocalist
      })
    }
    return playlist
  },
  randomizePlaylist: (playlist) => {
    //A function to shuffle the playlist array:
    let counter = playlist.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--
      let temp = playlist[counter];
      playlist[counter] = playlist[index];
      playlist[index] = temp
    }
    return playlist
  }
}
