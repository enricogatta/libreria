import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [libri, setLibri] = useState([]);
  const [generi, setGeneri] = useState([]);
  const [nuovoLibro, setNuovoLibro] = useState({ titolo: '', autore: '', anno: '', genere: '' });

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


  const aggiungiLibro = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/api/libri', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuovoLibro)
    });
    if (res.ok) {
      fetchLibri();
      setNuovoLibro({ titolo: '', autore: '', anno: '', genere: '' });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="main-container">
        <header className="header-app">
          <h1>Gestione Libreria</h1>
        </header>

        <section className="form-card">
          <h2>Aggiungi un nuovo libro</h2>
          <form onSubmit={aggiungiLibro}>
            <input type="text" placeholder="Titolo" value={nuovoLibro.titolo} onChange={e => setNuovoLibro({ ...nuovoLibro, titolo: e.target.value })} required />
            <input type="text" placeholder="Autore" value={nuovoLibro.autore} onChange={e => setNuovoLibro({ ...nuovoLibro, autore: e.target.value })} required />
            <input type="number" placeholder="Anno" value={nuovoLibro.anno} onChange={e => setNuovoLibro({ ...nuovoLibro, anno: e.target.value })} required />
            <select value={nuovoLibro.genere} onChange={e => setNuovoLibro({ ...nuovoLibro, genere: e.target.value })} required>
              <option value="">Scegli Genere</option>
              {generi.map(genere => (
                <option key={genere} value={genere}>{genere}</option>
              ))}
            </select>
            <button type="submit" className="btn-primary">Aggiungi Libro</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;