import React, { useState, useEffect } from "react";

const ShowMessageFunction = ({ message }) => {
  //const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const msg = event.target[0].value;
    //setMessage(msg);
  };

  // componentDidMount
  useEffect(() => {
    console.log("Componente renderizado!!!");
    // ComponentWillUnmount
    return () => {
      console.log("Componente unmounted");
    };
  }, []);

  // ComponentDidUpdate?
  useEffect(() => {
    console.log("Estado actualizado", message);
  }, [message]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>{message}</h1>
    </form>
  );
};

export default ShowMessageFunction;
