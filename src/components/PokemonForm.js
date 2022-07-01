import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({updatePokeCards}) {
const[name, setName] = useState("")
const[hp, setHp] = useState(0)
const[frontImage, setFrontImage] = useState("")
const[backImage, setBackImage]= useState("")


  function handleNewPokemon(e){
    const newPokeCard = {
      "name": name,
      "hp": hp,
      "sprites":{
        "front": frontImage,
        "back": backImage
      }
    }

      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokeCard)
      })
      .then(data => data.json())
      .then(data => updatePokeCards(data))
    

  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleNewPokemon(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name={name} onChange = {e => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name={hp} onChange = {e => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name={frontImage}
            onChange = {e => setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name={backImage}
            onChange = {e => setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
