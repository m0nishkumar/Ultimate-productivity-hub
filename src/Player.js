import React from 'react'
import  SpotifyPlayer  from 'react-spotify-web-playback'

export default function Player({trackUrl}) {

  return (
    <SpotifyPlayer
    showSaveIcon
    uris={trackUrl ? [trackUrl]:[]}
    />
  )
}
