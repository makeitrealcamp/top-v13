const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

export const transformPokemon = response => ({
  id: response.id,
  name: capitalize(response.name),
  image: response.sprites.back_default,
  ability: capitalize(response.abilities[0].ability.name),
});
