import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [libri, setLibri] = useState([]);
  const [generi, setGeneri] = useState([]);

  useEffect(() => {
    fetchLibri();
    fetchGeneri();
  }, []);

  const fetchLibri = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/api/libri');
      const data = await res.json();
      setLibri(data);
    } catch (error) {
      console.error("Errore di connessione al backend:", error);
    }
  };

  const fetchGeneri = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/api/generi');
      const data = await res.json();
      setGeneri(data);
    } catch (error) {
      console.error("Errore nel recupero dei generi:", error);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="main-container">
        <header className="header-app">
          <h1>Gestione Libreria</h1>
        </header>
        
      </div>
    </div>
  );
}

export default App;