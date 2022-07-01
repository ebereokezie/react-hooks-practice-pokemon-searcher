import React, {useState} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeCards, searchPoke}) {

  const searchableCards = pokeCards.filter((pokeCard) =>{
    if(searchPoke === "") return true

    return pokeCard.name.includes(searchPoke)
  })

  return (
    <Card.Group itemsPerRow={6}>
      {searchableCards.map((pokeCard) => <PokemonCard key = {pokeCard.id} pokeCard = {pokeCard} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
