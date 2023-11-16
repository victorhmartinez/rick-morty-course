import logo from './logo.svg';
import './App.css';
import imageRickMorty from './img/rick-morty.png'
import { useState } from 'react';
import Character from './components/characters/Character';
function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const character = await api.json();
    setCharacters(character.results)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>

        {characters ? (<Character characters={characters} setCharacters={setCharacters} />) : (
          <>
            <img src={imageRickMorty} alt="Ricky&Morty" className='img-home' />
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
