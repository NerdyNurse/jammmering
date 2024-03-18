
import './App.css';
import styles from './app.module.css'
import Playlist from './components/PlayLists/PlayList';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';


function App() {
  return (
    
    <div>
      <header className={styles.header}>Jammmering</header>
      <SearchBar />
      <div className={styles.main}>
        <div className={styles.list}>
      
      <SearchResults />
      
        </div>
        <div className={styles.list}>
      <Playlist />
      
        </div>
      
      
      </div>
      <footer>Footer goes here</footer>

      
    </div>
  );
}

export default App;
