import React, { useEffect, useContext } from "react";
import './App.css';
import { MainContext } from "./context/mainContext";
import Dashboard from './pages/Dashboard'

function App() {
  const value = useContext(MainContext);
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
