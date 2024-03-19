
import React, {useState} from 'react'

import './App.css';
import styles from './app.module.css'
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';


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

  return (
    
    <div>
      <header className={styles.header}>Jammmering</header>
      <SearchBar 
        userInput={userInput}
        changeHandeler={userInputChangeHandeler}/>
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
