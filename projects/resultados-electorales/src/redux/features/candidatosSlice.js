import { createSlice, current } from '@reduxjs/toolkit';

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
    votar: (state, { payload }) => {
      console.log(payload);
      console.log(current(state));

      state.candidatos[0].votos += 1;
    },
  },
});

export const { votar } = candidatosSlice.actions;

export default candidatosSlice.reducer;
