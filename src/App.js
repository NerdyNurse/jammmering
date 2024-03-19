
import React, {useState} from 'react'

import './App.css';
import styles from './app.module.css'
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import  Spotify  from './supportscripts/spotifyauthentication';



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
  
   
 const [displayToken, setDisplayToken] = useState('');

  const searchClickHandler = async () => {
    if (userInput.length < 5) {
      alert('add more characters to your search')
    }
    else {
      const token =Spotify.getAccessToken();
      const basicEndPoint = 'https://api.spotify.com/v1/search?q=';
      const searchType = 'type=track';

      if (token) {
        console.log(token)
        const searchURL = basicEndPoint + userInput + '&' + searchType;

        setDisplayToken(searchURL)

        try {
          const response = await fetch(searchURL, {
            headers: {
              Authorization: 'Bearer '+ token
            }
          });

          if(response.ok) {

          const data = await response.json();
          console.log(data)

          setSearchResults(data.tracks.items.map((item) => ({
            trackName: item.name,
            artist: item.artists.map(artist => artist.name).join(', '),
            imgUrl: item.album.images.length > 0 ? item.album.images[0].url : null, 


          })
          ));

          console.log(searchResults)
          setUserInput('')

      }} catch (error){
        console.error('Error during search:', error);
      }
      }
       else {
        setDisplayToken('something is not working')
      }
    }
    
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
        userInput={userInput}
        addTrackToPlaylist={addTrackToPlaylist}
        playList={playList}
        searchResults={searchResults}/>
      
        </div>
        <div className={styles.list}>
      <Playlist 
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist} />
      
        </div>
      
      
      </div>
      <footer>{displayToken}</footer>

      
    </div>
  );
}

export default App;
