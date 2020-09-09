import React, { useState, useEffect } from "react";

import { getTokenFromUrl } from "./spotify";

import Login from "./components/Login";
import Player from "./components/Player";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <>
      <div className="app">{token ? <Player /> : <Login />}</div>
    </>
  );
}

export default App;
