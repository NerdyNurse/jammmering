import React from 'react'
import Tracklist from '../TrackList/Tracklist'
import mockTracks from '../../MockData/mockTracks'



export default function SearchResults({userInput, addTrackToPlaylist, searchResults}) {
    
    

    return (
        <div>
            <h2>Search results for: {userInput}</h2>
            
            <Tracklist 
                renderList={searchResults} 
                onClickHandler={addTrackToPlaylist}
                addremove='+'/>
            
        </div>
    )
};