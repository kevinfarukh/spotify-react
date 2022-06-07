import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import { getTokenFromResponse } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';

//prop drilling is a way to access props from a parent component, we use redux or react context

const spotify = new SpotifyWebApi();

function App() {
 
  
  //destructure the state user and the dispatch function from the DataLayer, ex dataLayer.user
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash = '';

    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token);
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
    spotify.getPlaylist('37i9dQZF1DXcBWIGoYBM5M').then(response => {
    dispatch({
      type: 'SET_DISCOVER_WEEKLY',
      discover_weekly: response
    })
    })
    
  },[]);
  

  return (
    <div className="app">
      {
        token ? (<Player spotify ={spotify}/>) : (<Login />)
      }
    </div>
  )
}

export default App
