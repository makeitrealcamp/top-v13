import { useState } from 'react';
import { Elecciones } from './pages/Elecciones';

function App() {
  const [candidatos, setCandidatos] = useState([
    { nombre: 'Hugo', votos: 0 },
    { nombre: 'Paco', votos: 0 },
    { nombre: 'Luis', votos: 0 },
  ]);

  return <Elecciones candidatos={candidatos} setCandidatos={setCandidatos} />;
}

export default App;
