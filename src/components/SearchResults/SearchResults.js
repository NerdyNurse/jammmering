import React from 'react'
import Tracklist from '../TrackList/Tracklist'
import mockTracks from '../../MockData/mockTracks'

export default function SearchResults({userInput, addTrackToPlaylist, playList}) {
    const searchResults = mockTracks;
    console.log(searchResults)

    return (
        <div>
            <h2>Search results</h2>
            <p>searching for: {userInput}</p>
            <Tracklist renderList={searchResults} addremove={addTrackToPlaylist}/>
            
        </div>
    )
};