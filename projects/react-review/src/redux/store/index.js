import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messageReducer from "../reducers/messageReducer";
import pokemonReducer from "../reducers/pokemonReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = combineReducers({
  messageReducer,
  pokemonReducer,
});

const appStore = createStore(
  store,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
