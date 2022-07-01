import React from "react";

function Search({searchPoke, setSearchPoke}) {

  function handleSubmit(e){
    e.preventDefault()
    setSearchPoke(searchPoke)
  }


  return (
    <div className="ui search" onSubmit = {handleSubmit}>
      <div className="ui icon input">
        <input className="prompt" onChange = {e => setSearchPoke(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
