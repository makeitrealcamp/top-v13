import { createContext, useState } from 'react';

export const CandidatosContext = createContext();

export const CandidatosProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([
    { nombre: 'Hugo', votos: 0 },
    { nombre: 'Paco', votos: 0 },
    { nombre: 'Luis', votos: 0 },
  ]);

  const votar = votarPor => {
    const nuevosVotos = votarPor.votos + 1;

    const nuevos = candidatos.map(candidato => {
      if (candidato.nombre === votarPor.nombre) {
        return {
          ...candidato,
          votos: nuevosVotos,
        };
      }
      return { ...candidato };
    });

    setCandidatos(nuevos);
  };

  return (
    <CandidatosContext.Provider value={{ candidatos, votar }}>
      {children}
    </CandidatosContext.Provider>
  );
};
