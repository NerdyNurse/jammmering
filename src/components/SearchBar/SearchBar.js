import React from 'react'

export default function SearchBar({userInput, changeHandeler, searchClickHandler}) {

    return(
        <div>
            
            <input 
                type='text' 
                value={userInput} 
                onChange={changeHandeler} />
            <button onClick={searchClickHandler}>search</button>
        </div>
    )
}