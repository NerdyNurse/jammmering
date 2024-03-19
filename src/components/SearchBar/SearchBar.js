import React from 'react'

export default function SearchBar({userInput, changeHandeler}) {

    return(
        <div>
            
            <input 
                type='text' 
                value={userInput} 
                onChange={changeHandeler} />
            <button>search</button>
        </div>
    )
}