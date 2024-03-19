import React from 'react'
import Tracklist from '../TrackList/Tracklist'

export default function Playlist({playList, removeTrackFromPlaylist}){

    return (
        <div>
            <h2>New Playlist</h2>
            {playList.length > 0 ? 
                <Tracklist 
                    renderList={playList} 
                    onClickHandler={removeTrackFromPlaylist}
                    addremove='-'/>
                     :
                <p>select songs from the search results to start making your playlist</p>}
            <button>Save to Spotify</button>
        </div>
    )
}