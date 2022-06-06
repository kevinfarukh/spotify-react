import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import { getTokenFromResponse } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js'

// client ID: 3cbfa619ede64419bf1e14b98a56b7b9
//https://www.youtube.com/watch?v=pnkuI8KXW_8 min 1:23:00

const spotify = new SpotifyWebApi();

function App() {
 
  const [token, setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash = '';

    const _token = hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      })
    }

    console.log('I have a token >>', hash)
  },[]);

  return (
    <div className="app">
      {
        token ? (<Player />) : (<Login />)
      }
    </div>
  )
}

export default App
