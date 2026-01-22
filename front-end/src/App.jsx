import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [libri, setLibri] = useState([]);

  useEffect(() => {
    fetchLibri();
  }, []);

  const fetchLibri = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/api/libri');
      const data = await res.json();
      setLibri(data);
    } catch (error) {
      console.error("Errore nel caricamento:", error);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="main-container">
        <h1>La Mia Libreria</h1>
      </div>
    </div>
  );
}
export default App;