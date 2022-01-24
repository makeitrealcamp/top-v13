import { CREAR_NOTIFICATION } from '../constants';

export default function candidatosReducer(
  state = {
    id: 0,
    mensaje: '',
    severity: 'success',
  },
  { type, notificacion }
) {
  switch (type) {
    case CREAR_NOTIFICATION:
      return {
        id: Date.now(),
        mensaje: notificacion.mensaje,
        severity: notificacion.severity,
      };
    default:
      return state;
  }
}
