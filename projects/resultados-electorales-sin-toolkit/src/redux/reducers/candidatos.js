import { CREAR_CANDIDATO, VOTAR_POR_CANDIDATO } from '../constants';

const initialState = {
  candidatos: [
    { nombre: 'Hugo', votos: 0 },
    { nombre: 'Paco', votos: 0 },
    { nombre: 'Luis', votos: 0 },
  ],
};

const votarPorCandidato = (candidatos, votarPor) => {
  return candidatos.map(candidato => {
    if (candidato.nombre === votarPor.nombre) {
      return {
        ...candidato,
        votos: votarPor.votos + 1,
      };
    }
    return { ...candidato };
  });
};

export default function candidatosReducer(
  state = initialState,
  { type, candidato }
) {
  switch (type) {
    case CREAR_CANDIDATO:
      return {
        ...state,
        candidatos: [
          ...state.candidatos,
          {
            nombre: `${candidato.firstName} ${candidato.lastName}`,
            votos: 0,
            propuestas: candidato.propuestas,
          },
        ],
      };
    case VOTAR_POR_CANDIDATO:
      return {
        ...state,
        candidatos: votarPorCandidato(state.candidatos, candidato),
      };
    default:
      return state;
  }
}
