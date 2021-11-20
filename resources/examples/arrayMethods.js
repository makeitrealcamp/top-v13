[1, 2, 3].map(n => n * 2);

['🍓', '🥑', '🥩'].filter(food => food !== '🥩');

['🐥', '🐯', '🐔', '🐷'].find(animal => animal === '🐔');

['🐥', '🐯', '🐔', '🐷'].findIndex(animal => animal === '🐔');

Array(3).fill('💸');

['✅', '✅', '❌', '✅', '✅'].every(element => element === '✅');

['✅', '✅', '❌', '✅', '✅'].some(element => element === '❌');

[
  {
    name: 'Dev 1',
    years: 3,
  },
  {
    name: 'Dev 2',
    years: 5,
  },
].reduce((accumulator, dev) => accumulator + dev.years, 0);

const users = [
  { nombre: 'ana', edad: 25 },
  { nombre: 'Pedro', edad: 26 },
];
const findAna = user => user.nombre === 'ana';
const user = users.find(findAna);
console.log('Edad de Ana:', user.edad);
