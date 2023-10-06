import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const { players, searchPlayer } = usePlayerSearch();

  return (
    <div>
      <h1>NBA Player directory</h1>

      <input 
        type="text"
        id="main-bar" 
        onChange={(e) => searchPlayer(e.target.value)} 
      />

      <ul>
        {players.map(
          (player) => 
          (<li id={player.id}>{player.player_name + ' | ' + player.season + ' | ' + player.pts}</li>)
        )}
        {players.length === 0 && 'No players found'}
      </ul>

    </ div>
  )
}

function usePlayerSearch() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    searchPlayer(lastQuery);
  }, [])

  const searchPlayer = async (q) => {
    const res = await fetch(
      'http://localhost:8080?' + new URLSearchParams({q})
    );
    const data = await res.json()

    setPlayers(data);

    localStorage.setItem('lastQuery', q);
  }

  return { players, searchPlayer }; 
}

export default App;
