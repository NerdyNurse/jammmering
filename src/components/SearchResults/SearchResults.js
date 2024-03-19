import React from 'react'
import Tracklist from '../TrackList/Tracklist'
import mockTracks from '../../MockData/mockTracks'

const apiKey = '56c6149d26df4c13ace3488d991ac6f0'

export default function SearchResults({userInput, addTrackToPlaylist, playList}) {
    
    
    const searchResults = mockTracks;
    console.log(searchResults)

    return (
        <div>
            <h2>Search results</h2>
            <p>searching for: {userInput}</p>
            <Tracklist 
                renderList={searchResults} 
                onClickHandler={addTrackToPlaylist}
                addremove='+'/>
            
        </div>
    )
};