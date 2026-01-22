import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [libri, setLibri] = useState([]);

  return (
    <div className="page-wrapper">
      <div className="main-container">
        <header className="header-app">
          <h1>Gestione Libreria</h1>
        </header>
        {/* Il resto verrà aggiunto nei prossimi commit */}
      </div>
    </div>
  );
}

export default App;