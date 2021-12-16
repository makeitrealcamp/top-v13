import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transformPokemon } from '../../utils';
import Card from '../card/Card';

const Pokemon = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState();

  const getPokemonsFromApi = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    ).then(res => res.json());

    setPokemon(transformPokemon(response));
  };

  useEffect(() => {
    getPokemonsFromApi();
  }, []);

  return (
    <div>
      {pokemon && (
        <Card
          image={pokemon.image}
          name={pokemon.name}
          ability={pokemon.ability}
          id={pokemon.id}
        />
      )}
    </div>
  );
};

export default Pokemon;
