import { useState } from "react";
import { Characters } from "./components/Characters";
import { Clients } from "./components/Clients";

function App() {
  const [showCharacters, setShowCharacters] = useState(false);
  const [showClients, setShowClients] = useState(false);

  return (
    <div className="App">
      <div className="buttons-container">
        <button
          onClick={() => {
            setShowCharacters(!showCharacters);
          }}
        >
          Show Characters
        </button>

        <button
          onClick={() => {
            setShowClients(!showClients);
          }}
        >
          Show Clients
        </button>
      </div>
      {showCharacters && <Characters />}
      {showClients && <Clients />}
    </div>
  );
}

export default App;
