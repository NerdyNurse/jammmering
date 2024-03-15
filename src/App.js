
import './App.css';
import Playlist from './components/PlayList';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import Tracklist from './components/Tracklist';

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
