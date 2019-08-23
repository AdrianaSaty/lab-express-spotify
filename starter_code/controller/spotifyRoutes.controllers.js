// const spotifyWebAPI = require('spotify-web-api-node');

// const spotifyAPI = new spotifyWebAPI();

const index = (req, res) => {
    res.render('index');
  };

  
module.exports = {
    index
}

