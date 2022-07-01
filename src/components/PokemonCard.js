import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeCard}) {

  const[updatePic, setUpdatePic] = useState(true)

  function handlePicFlip(){
    setUpdatePic(!updatePic)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handlePicFlip}>
         {updatePic? <img src= {pokeCard.sprites.front} /> : <img src=  {pokeCard.sprites.back}/>}
        </div>
        <div className="content">
          <div className="header">{pokeCard.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeCard.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
