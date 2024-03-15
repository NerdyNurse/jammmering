
import './App.css';
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import Tracklist from './components/TrackList/Tracklist';

function App() {
  return (
    <div>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />

      
    </div>
  );
}

export default App;
