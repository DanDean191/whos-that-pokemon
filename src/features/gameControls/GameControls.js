import React from 'react'
import { useDispatch } from 'react-redux'
import { giveUp, getPokemon } from '../pokemon/pokemonSlice'
import Searchbar from '../searchbar/Searchbar';

const GameControls = () => {
    const dispatch = useDispatch()

    const revealPokemon = () => dispatch(giveUp())
    const newPokemon = () => dispatch(getPokemon())

    return (
        <div className="controls">
            <Searchbar />
            <div>
                <button onClick={revealPokemon} >Give up</button>
                <button onClick={newPokemon} >New Game</button>
            </div>
        </div>
    )
}

export default GameControls