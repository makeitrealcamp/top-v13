import { CREAR_CANDIDATO, VOTAR_POR_CANDIDATO } from '../constants';

export const nuevoCandidato = payload => ({
  type: CREAR_CANDIDATO,
  candidato: payload,
});

export const votar = payload => ({
  type: VOTAR_POR_CANDIDATO,
  candidato: payload,
});
