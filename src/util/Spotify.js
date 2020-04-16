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
            window.setTimeout(() =>{
                return accessToken= '', expiresIn * 1000
            });
    
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else{
            window.location.href= `https://accounts.spotify.com/authorize?
            client_id=${clientId}&response_type=token
            &scope=playlist-modify-public&redirect_uri=${redirectUri}`
        }
       
        }
    }

/*if you get an error, check the else statement- not sure if
carriage returns in the url are allowed */

export default Spotify;