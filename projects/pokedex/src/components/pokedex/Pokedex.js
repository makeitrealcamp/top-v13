import { useEffect, useState } from 'react';
import { transformPokemon } from '../../utils';
import Card from '../card/Card';
import './_Pokedex.scss';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsFromApi = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon').then(
      res => res.json()
    );

    response.results.forEach(async poke => {
      const response = await fetch(poke.url).then(res => res.json());
      setPokemons(oldPokemons => [...oldPokemons, transformPokemon(response)]);
    });
  };

  useEffect(() => {
    getPokemonsFromApi();
  }, []);

  return (
    <div className="pokedex">
      {pokemons.map(({ image, name, ability, id }) => {
        return (
          <Card image={image} name={name} ability={ability} id={id} key={id} />
        );
      })}
    </div>
  );
};

export default Pokedex;
