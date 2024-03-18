import React from 'react'
import Tracklist from '../TrackList/Tracklist'

export default function Playlist(){

    return (
        <div>
            <h2>Playlist</h2>
            
            <Tracklist />
            <button>Save to Spotify</button>
        </div>
    )
}