import { configureStore } from "@reduxjs/toolkit";
import candidatosReducer from "./features/candidatosSlice";
import notificacionesReducer from "./features/notificacionesSlice";

export default configureStore({
  reducer: {
    candidatos: candidatosReducer,
    notificaciones: notificacionesReducer,
  },
});
