import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [libri, setLibri] = useState([]);
  const [generi, setGeneri] = useState([]);
  const [nuovoLibro, setNuovoLibro] = useState({ titolo: '', autore: '', anno: '', genere: '' });
  const [ricerca, setRicerca] = useState("");

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

  const eliminaLibro = async (id) => {
    if (window.confirm('Sei sicuro di voler eliminare questo libro?')) {
      await fetch(`http://127.0.0.1:5000/api/libri/${id}`, { method: 'DELETE' });
      fetchLibri();
    }
  };

  const svuotaLibreria = async () => {
    if (window.confirm('Sei sicuro di voler cancellare TUTTI i libri?')) {
      await fetch('http://127.0.0.1:5000/api/libri', { method: 'DELETE' });
      fetchLibri();
    }
  };

  const libriFiltrati = libri.filter(l =>
    l.autore?.toLowerCase().includes(ricerca.toLowerCase()) ||
    l.genere?.toLowerCase().includes(ricerca.toLowerCase())
  );



  return (
    <div className="page-wrapper">
      <div className="main-container">
        <header className="header-app">
          <h1>Gestione Libreria</h1>
          {libri.length > 0 && (
            <button className="btn-danger" onClick={svuotaLibreria}>Svuota Libreria</button>
          )}
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
        
        <main className="books-grid">
          {libriFiltrati.map(libro => (
            <div key={libro.id} className="book-item">
              <div className="book-details">
                <h3>{libro.titolo}</h3>
                <p><strong>Autore:</strong> {libro.autore}</p>
                <p><strong>Genere:</strong> {libro.genere} | <strong>Anno:</strong> {libro.anno}</p>
                <small>ID: {libro.id}</small>
              </div>
              <button className="btn-delete" onClick={() => eliminaLibro(libro.id)}>Elimina</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;