
import React, {useState} from 'react'

import './App.css';
import styles from './app.module.css'
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import spotifyAuthorize from './supportscripts/spotifyauthentication';



function App() {

  const [userInput, setUserInput] = useState("")
  const userInputChangeHandeler = ({target}) => {
    setUserInput(target.value)
  
  }

  const [playList, setPlayList] = useState([])
  const addTrackToPlaylist = (trackData) => {
    if (playList.includes(trackData)){
      alert('The selected track is already in your playlist')
    }
    else {
    setPlayList([...playList, trackData])
  }

  }
  const removeTrackFromPlaylist = (trackData) => {
    setPlayList(playList.filter((track) => track !== trackData))
  }

  const [searchResults, setSearchResults] = useState([])
  
   


  const searchClickHandler = () => {
    if (userInput.length < 5) {
      alert('add more characters to your search')
    }
    /*else {
      spotifyAuthorize()

      fetch(`https://api.spotify.com/v1/search?q=${userInput}&type=track%2Cartist%2Calbum`, {
        method: 'GET', headers: 
      {'Authorization': 'Bearer ' + token}}).then((response)=>console.log(response)).catch(error => console.log(error))
    
  }*/
}
    
  return (
    
    <div>
      <header className={styles.header}>Jammmering</header>
      <button onClick={spotifyAuthorize}>Login to Spotify</button>
      <SearchBar 
        userInput={userInput}
        changeHandeler={userInputChangeHandeler}
        searchClickHandler={searchClickHandler} />
      <div className={styles.main}>
        <div className={styles.list}>
      
      <SearchResults 
        userInput={userInput}
        addTrackToPlaylist={addTrackToPlaylist}
        playList={playList}/>
      
        </div>
        <div className={styles.list}>
      <Playlist 
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist} />
      
        </div>
      
      
      </div>
      <footer>Footer goes here</footer>

      
    </div>
  );
}

export default App;
