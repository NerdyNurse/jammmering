import React from 'react'
import Tracklist from '../TrackList/Tracklist'

export default function Playlist({playList, removeTrackFromPlaylist}){

    return (
        <div>
            <h2>Playlist</h2>
            
            <Tracklist 
                renderList={playList} 
                addremove={removeTrackFromPlaylist}/>
            <button>Save to Spotify</button>
        </div>
    )
}