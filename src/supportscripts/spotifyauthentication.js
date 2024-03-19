const spotifyAuthorize = () => {

const client_id = 'f6ad3f87cbd0423c9e98af833f01a2d5'
const apiKey = '56c6149d26df4c13ace3488d991ac6f0'


var redirect_uri = encodeURIComponent('http://localhost:3000/callback');

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

var state = generateRandomString(16);
const stateKey = 'No clue what this does'



localStorage.setItem(stateKey, state);
var scope = 'user-read-private user-read-email';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&state=' + encodeURIComponent(state);

// redirect user to log in
window.location.href = url;

}

export default spotifyAuthorize