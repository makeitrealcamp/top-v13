import { CREAR_NOTIFICATION } from '../constants';

export const crearNotificacion = notificacion => ({
  type: CREAR_NOTIFICATION,
  notificacion,
});
