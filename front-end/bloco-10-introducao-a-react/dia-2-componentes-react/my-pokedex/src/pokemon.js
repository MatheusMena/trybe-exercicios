import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render(){
        const { pokeName, pokeType, pokeWeight, pokeImg } = this.props
        return (
            <div className="pokes">
                <p>{pokeName}</p>
                <p>{pokeType}</p>
                <p>{pokeWeight}</p>
                <img src={ pokeImg }  alt={`pokemon ${pokeName}`}></img>
            </div>
        )

    }
}
Pokemon.propTypes = {
    pokeName: PropTypes.string.isRequired,
    pokeType: PropTypes.string.isRequired,
    pokeWeight: PropTypes.number.isRequired,
    pokeImg: PropTypes.string.isRequired,
  };

export default Pokemon;