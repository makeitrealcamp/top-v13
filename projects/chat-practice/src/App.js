import { useEffect } from "react";
import { io } from "socket.io-client";

import "./App.css";

const socket = io("http://localhost:3005");

function App() {
  useEffect(() => {
    /*socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });*/
  });

  const handleEmitMessage = () => {
    /*socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });*/
  };

  return <div className="App"></div>;
}

export default App;
