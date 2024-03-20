const Spotify = {
    stateKey: 'No_clue_what_this_does',

    spotifyAuthorize()  {

    const client_id = 'f6ad3f87cbd0423c9e98af833f01a2d5'
    const redirect_uri = 'http://localhost:3001/callback'

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
    console.log(`state: ${state}`)

    localStorage.setItem(this.stateKey, state);
    var scope = 'user-read-private user-read-email';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    // redirect user to log in
    window.location.href = url;

    },

    accessToken: '',
    expiresIn: 0,

    getAccessToken() {
        if(this.accessToken){
            return this.accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        const stateMatch = window.location.href.match(/state=([^&]*)/);

        const storedState = localStorage.getItem(this.stateKey);

        if (accessTokenMatch && expiresInMatch && stateMatch) {
            if (stateMatch[1] === storedState) {
                this.accessToken = accessTokenMatch[1];
                this.expiresIn = Number(expiresInMatch[1])
                window.setTimeout(() => this.accessToken = '', this.expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return this.accessToken
            } else {
                console.error('state mismatch')
                return null
            }
        } else {
            this.spotifyAuthorize();
            return null;
        }
    },

    async searchByUserInput(userInput) {
        const token =Spotify.getAccessToken();
        const basicEndPoint = 'https://api.spotify.com/v1/search?q=';
        const searchType = 'type=track';

        if (token) {
        
            const searchURL = basicEndPoint + userInput + '&' + searchType;       

            try {
                const response = await fetch(searchURL, {
                    headers: {
                    Authorization: 'Bearer '+ token
                    }
                });

                if(response.ok) {

                const data = await response.json();
                console.log(data)

                const trackData = data.tracks.items.map((item) => ({
                    trackName: item.name,
                    artist: item.artists.map(artist => artist.name).join(', '),
                    imgUrl: item.album.images.length > 0 ? item.album.images[0].url : null,
                    uri: item.uri,
                }));
                
                return trackData
            }
            } catch (error){
                console.error('Error during search:', error);
                };
        }
    
}


};



export default Spotify

