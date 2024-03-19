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

    async request(url, options = {}) {
        if (!this.accessToken) {
        this.accessToken = this.getAccessToken(); // Ensure access token exists
        }
        
        try {
        const response = await fetch(url, {
            ...options,
            headers: {
            Authorization: `Bearer ${this.accessToken}`,
            ...options.headers
            }
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        
        throw new Error('Request failed!');
        } catch (error) {
        console.error(error);
        }
    }


};



export default Spotify

