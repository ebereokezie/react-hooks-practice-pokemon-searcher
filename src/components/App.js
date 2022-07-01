import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
 const [pokeCards, setPokeCards] = useState([])

 useEffect(()=>{
  fetch("http://localhost:3001/pokemon")
  .then(data => data.json())
  .then(data => setPokeCards(data))
 }, [])

 function updatePokeCards(newCard){
  setPokeCards([...pokeCards, newCard])
 }


  return (
    <div className="App">
      <PokemonPage pokeCards ={pokeCards} updatePokeCards= {updatePokeCards}/>
    </div>
  );
}

export default App;
