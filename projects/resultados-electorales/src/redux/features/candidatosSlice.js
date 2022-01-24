import { createSlice } from "@reduxjs/toolkit";
import { crearNotificacion } from "./notificacionesSlice";

const votarPorCandidato = (candidatos, votarPor) => {
  const nuevosVotos = votarPor.votos + 1;

  return candidatos.map((candidato) => {
    if (candidato.nombre === votarPor.nombre) {
      return {
        ...candidato,
        votos: nuevosVotos,
      };
    }
    return { ...candidato };
  });
};

const candidatosSlice = createSlice({
  name: "candidatos",
  initialState: {
    candidatos: [
      { nombre: "Hugo", votos: 0 },
      { nombre: "Paco", votos: 0 },
      { nombre: "Luis", votos: 0 },
    ],
  },
  reducers: {
    votar: (state, { payload: candidatoIndex }) => {
      //   const candidatos = votarPorCandidato(state.candidatos, payload);
      //   state.candidatos = candidatos;
      state.candidatos[candidatoIndex].votos += 1;
    },
    nuevoCandidato: (state, { payload: candidato }) => {
      state.candidatos.push({
        nombre: `${candidato.firstName} ${candidato.lastName}`,
        votos: 0,
        propuestas: candidato.propuestas,
      });
    },
  },
});

export const { votar, nuevoCandidato } = candidatosSlice.actions;

const candidatoEsValido = (candidato) => {
  return candidato !== null;
};

export const crearCandidato = (candidato) => async (dispatch) => {
  if (candidatoEsValido(candidato)) {
    dispatch(nuevoCandidato(candidato));
    dispatch(
      crearNotificacion({
        mensaje: `Candidato ${candidato.firstName} ${candidato.lastName} creado`,
      })
    );
  } else {
    dispatch(
      crearNotificacion({
        mensaje: "Error creando al candidato",
        severity: "error",
      })
    );
  }
};

export default candidatosSlice.reducer;
