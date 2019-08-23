// require spotify-web-api-node package here:
const SpotifyWebApi = require('spotify-web-api-node');

// Remember to insert your credentials here
const clientId = '1ce4321c0189438aaa6a456fa867b976',
    clientSecret = 'dd8f1f2c00f346e29177662da17b1d92';

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then( data => {
    spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch(error => {
    console.log('Something went wrong when retrieving an access token', error);
  })


// Render
const index = (req, res) => {
    res.render('index');
  };

const artistsRoute = async (req, res) => {
  const { search } = req.query;
  console.log(search)
  try {
    const allArtists = await spotifyApi.searchArtists(search);
    console.log(allArtists.body);
    console.log('entrou')
    res.render('artists'), { allArtists };
  } catch (err) {
    console.log(err)
  }

};



  
module.exports = {
    index,
    artistsRoute
}

