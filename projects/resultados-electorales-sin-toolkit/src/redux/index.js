import { combineReducers, createStore } from "redux";
import candidatos from "./reducers/candidatos";
import { composeWithDevTools } from "redux-devtools-extension";
import notificaciones from "./reducers/notificaciones";

const store = combineReducers({
  candidatos,
  notificaciones,
});

const appStore = createStore(store, composeWithDevTools());

export default appStore;
