
import './App.css';
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';


function App() {
  return (
    
    <div>
      <header>Jammmering</header>
      <div>
        <div className='searchDiv'>
      <SearchBar />
      <SearchResults />
      
        </div>
        <div className='playListDiv'>
      <Playlist />
      
        </div>
      
      
      </div>
      <footer>Footer goes here</footer>

      
    </div>
  );
}

export default App;
