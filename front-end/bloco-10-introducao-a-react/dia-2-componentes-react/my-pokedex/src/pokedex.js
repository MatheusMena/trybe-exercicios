import React from "react";
import pokemons from "./data";
import Pokemon from "./pokemon";
import './App.css'
class Pokedex extends React.Component {
    render(){
        return (
            <div>
              {pokemons.map((item) => 
              <Pokemon key={ item.name } 
              pokeName={ item.name }
              pokeType={ item.type }
              pokeWeight={ item.averageWeight.value + item.averageWeight.measurementUnit }
              pokeImg={item.image} 
              /> 
              )};
            </div>
        )

    }
}

export default Pokedex;