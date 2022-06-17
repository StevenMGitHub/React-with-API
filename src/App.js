import imageRickMorty from "./img/rick-morty.png";
import { useState } from 'react';
import './App.css';
import Characters from './Components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqAPI = async () => {
       const api = await fetch('https://rickandmortyapi.com/api/character');
       const characterAPI = await api.json();
       console.log(characterAPI);
       setCharacters(characterAPI.results);
  }

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
         <h1 className="title">Rick and Morty</h1>
         {characters ? (<Characters characters={characters} setCharacters={setCharacters}></Characters>) :
          ( <>
            {<img src={imageRickMorty} alt="Rick and Morty" className="img-home"></img>}
            <button onClick={reqAPI} className="btn-search" >Buscar personajes</button> 
            </>
          )
         }           
      </header>
    </div>
  );
}

export default App;
