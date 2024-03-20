
import React, {useState} from 'react'

import './App.css';
import styles from './app.module.css'
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import  Spotify  from './supportscripts/spotify';



function App() {

  const [userInput, setUserInput] = useState("")
  const userInputChangeHandeler = ({target}) => {
    setUserInput(target.value)
  
  }

  const [playListName, setPlayListName] = useState('My Jammmering Playlist')

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
  const [searchingFor, setSearchingFor] = useState('')
  
   
 const [displayToken, setDisplayToken] = useState('');
 const [costomName, setCostomName] = useState('');

  const renamePlayList = () => {
    if(costomName){
      setPlayListName(costomName)
      setCostomName('')}
  }

  const renameChangeHandler = ({target}) => {
    setCostomName(target.value)
  }

  const searchClickHandler = async () => {
    /*if (userInput.length < 5) {
      alert('add more characters to your search')
    }
    else { */
    const results = await Spotify.searchByUserInput(userInput);

    setSearchResults(results);
    console.log(`SearchResults:`, results);
    setSearchingFor(userInput);
    setUserInput('');
       
    
    
  }

    
  return (
    
    <div>
      <header className={styles.header}>Jammmering</header>
  
      <SearchBar 
        userInput={userInput}
        changeHandeler={userInputChangeHandeler}
        searchClickHandler={searchClickHandler} />
      <div className={styles.main}>
        <div className={styles.list}>
      
      <SearchResults 
        userInput={searchingFor}
        addTrackToPlaylist={addTrackToPlaylist}
        playList={playList}
        searchResults={searchResults}/>
      
        </div>
        <div className={styles.list}>
      <Playlist 
        playListName={playListName}
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        costomName={costomName}
        renameChangeHandler={renameChangeHandler}
        renamePlayList={renamePlayList}
         />
      
        </div>
      
      
      </div>
      <footer>{displayToken}</footer>

      
    </div>
  );
}

export default App;
