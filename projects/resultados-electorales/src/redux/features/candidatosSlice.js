import { createSlice } from '@reduxjs/toolkit';

const votarPorCandidato = (candidatos, votarPor) => {
  const nuevosVotos = votarPor.votos + 1;

  return candidatos.map(candidato => {
    if (candidato.nombre === votarPor.nombre) {
      return {
        ...candidato,
        votos: nuevosVotos,
      };
    }
    return { ...candidato };
  });
};

export const candidatosSlice = createSlice({
  name: 'candidatos',
  initialState: {
    candidatos: [
      { nombre: 'Hugo', votos: 0 },
      { nombre: 'Paco', votos: 0 },
      { nombre: 'Luis', votos: 0 },
    ],
  },
  reducers: {
    votar: (state, { payload: candidatoIndex }) => {
      //   const candidatos = votarPorCandidato(state.candidatos, payload);
      //   state.candidatos = candidatos;
      state.candidatos[candidatoIndex].votos += 1;
    },
    nuevoCandidato: (state, { payload: candidato }) => {
      if (candidato !== null) {
        state.candidatos.push({
          nombre: `${candidato.firstName} ${candidato.lastName}`,
          votos: 0,
        });
      }
    },
  },
});

export const { votar, nuevoCandidato } = candidatosSlice.actions;

export default candidatosSlice.reducer;
