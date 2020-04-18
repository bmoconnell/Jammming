const clientId= "cbda1991bf8a4b16a7aa5946436b4739";
const redirectUri= "http://localhost:3000/";

let accessToken;

const Spotify =  {

    getAccessToken(){
        if(accessToken){
            return accessToken;
        }
        //check for access token match

        const accessTokenMatch= window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch= window.location.href.match(/expires_in=([^&]*)/);
           

        if(accessTokenMatch && expiresInMatch){
            accessToken= accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            
            /*clear the parameters, allowing us to set a new access 
            token when it expires */
            window.setTimeout(() => accessToken= '', expiresIn * 1000
            );
    
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else{
            window.location.href= `https://accounts.spotify.com/authorize?
            client_id=${clientId}&response_type=token
            &scope=playlist-modify-public&redirect_uri=${redirectUri}`
        }
    
        },

        //will need to replace spaces in term with %20

        search(term){
            const accessToken= Spotify.getAccessToken();

            fetch(`https://api.spotify.com/v1/search?q=${term}&type=track&limit=6`,
            {headers: {
                Authorization: `Bearer ${accessToken}`
            }
            }).then(response => {
                return response.json()
            }).then(jsonResponse => {

                if(!jsonResponse.tracks){
                    return [];
                }else{
                    return jsonResponse.tracks.items.map(track => ({
                            id: track.id,
                            name: track.name,
                            artist: track.artists[0].name,
                            album: track.album.name,
                            uri: track.uri
                        }));
                    }
                });
            
        },

        }



/*if you get an error, check the else statement- not sure if
carriage returns in the url are allowed */

export default Spotify;