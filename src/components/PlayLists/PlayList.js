import React from 'react'
import Tracklist from '../TrackList/Tracklist'

export default function Playlist({playList, removeTrackFromPlaylist, playListName, renamePlayList, renameChangeHandler, costomName}){

    return (
        <div>
            <h2>{playListName}</h2>
            <input type='text' value={costomName} onChange={renameChangeHandler} />
            <button
            onClick= {renamePlayList}
            >rename</button>
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