import React from 'react'
import Tracklist from '../TrackList/Tracklist'

export default function SearchResults({userInput}) {

    return (
        <div>
            <h2>Search results</h2>
            <p>searching for: {userInput}</p>
            <Tracklist />
        </div>
    )
};