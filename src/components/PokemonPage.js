import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokeCards,updatePokeCards }) {
  const[searchPoke, setSearchPoke]=useState("")

 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updatePokeCards ={updatePokeCards}/>
      <br />
      <Search searchPoke = {searchPoke} setSearchPoke = {setSearchPoke}/>
      <br />
      <PokemonCollection pokeCards = {pokeCards} searchPoke = {searchPoke}/>
    </Container>
  );
}

export default PokemonPage;
