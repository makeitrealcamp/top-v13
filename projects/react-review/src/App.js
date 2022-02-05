import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import ShowMessageFunction from "./components/ShowMessageFunction";
import ShowMessageClass from "./components/ShowMessageClass";

import { SET_MESSAGE } from "./redux/constants";
import { fetchPokemons } from "./redux/actions";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showFn, setShowFn] = useState(true);
  const [showClass, setShowClass] = useState(false);
  const [message, setMessage] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const refInput = useRef();

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const msg = refInput.current.value;
    console.log("MSG ", msg);

    dispatch({ type: SET_MESSAGE, payload: msg });
    //setMessage(msg);
  };

  const getPokemons = () => {
    dispatch(fetchPokemons());
  };

  useEffect(() => {
    //getPokemons();
  }, []);

  return (
    <div className="App">
      <button onClick={getPokemons}>Crargar Pokemones</button>
      {pokemons.map((item, i) => (
        <h1 key={i}>{item.name}</h1>
      ))}

      {/*<input ref={refInput}></input>
      <button onClick={handleClick}>Show message</button>
      {showFn && <ShowMessageFunction />}
      {showClass && <ShowMessageClass />}
      <button onClick={() => setShowClass(!showClass)}>
        Show class component{" "}
      </button>
      <button onClick={() => setShowFn(!showFn)}>
        Show functional component{" "}
  </button>*/}
    </div>
  );
}

export default App;
