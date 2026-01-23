# 📚 Libreria - Sistema di Gestione Biblioteca

Un'applicazione web full-stack per la gestione completa di una biblioteca digitale, sviluppata con tecnologie moderne per offrire un'esperienza utente intuitiva e funzionale.

## 🎯 Obiettivi del Progetto

Questo progetto è stato sviluppato con l'obiettivo di creare un sistema completo di gestione bibliotecaria che dimostri competenze nello sviluppo full-stack. Gli obiettivi principali includono:

### **Funzionalità Core**
- **Gestione Catalogo**: Aggiunta, visualizzazione e rimozione di libri dalla collezione
- **Ricerca Avanzata**: Filtraggio dei libri per autore e genere
- **Interfaccia Intuitiva**: Design moderno e responsive per una migliore esperienza utente
- **API RESTful**: Backend robusto con endpoints ben strutturati

### **Obiettivi Tecnici**
- **Architettura Full-Stack**: Separazione chiara tra frontend e backend
- **Best Practices**: Utilizzo di convenzioni moderne di sviluppo
- **Scalabilità**: Codice modulare e facilmente estensibile
- **User Experience**: Interfaccia pulita e funzionale

### **Obiettivi Educativi**
- **Apprendimento Tecnologico**: Dimostrazione di competenze in Python/Flask e React
- **Gestione Stato**: Implementazione corretta dello stato nell'applicazione React
- **Comunicazione API**: Gestione delle chiamate HTTP e gestione errori
- **Styling Moderno**: Utilizzo di CSS moderno per layout responsive

## 🏗️ Architettura

### **Backend (Flask)**
- **Framework**: Flask con estensioni CORS
- **Database**: In-memory (lista Python) per semplicità
- **API Endpoints**:
  - `GET /api/libri` - Recupera tutti i libri
  - `POST /api/libri` - Aggiunge un nuovo libro
  - `DELETE /api/libri/<id>` - Elimina un libro specifico
  - `DELETE /api/libri` - Elimina tutti i libri
  - `GET /api/generi` - Recupera la lista dei generi disponibili

### **Frontend (React + Vite)**
- **Framework**: React 19 con hooks moderni
- **Build Tool**: Vite per sviluppo rapido
- **Styling**: CSS moderno con design responsive
- **Funzionalità**:
  - Form per aggiunta libri con validazione
  - Lista libri con layout a card orizzontali
  - Ricerca per autore e genere
  - Pulsanti per eliminazione singoli libri e svuotamento completo

## 🛠️ Tecnologie Utilizzate

### **Backend**
- **Python 3.12+**
- **Flask** - Framework web leggero
- **Flask-CORS** - Gestione Cross-Origin Resource Sharing
- **Faker** - Generazione dati di test
- **uv** - Gestore dipendenze Python moderno

### **Frontend**
- **React 19** - Framework JavaScript moderno
- **Vite** - Build tool veloce
- **ESLint** - Linting con regole personalizzate
- **CSS Moderno** - Styling responsive

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Python 3.12 o superiore**
- **Node.js 18+ e npm**
- **uv** (gestore dipendenze Python moderno)

### Installazione uv (se non presente)
```bash
# Su Windows con PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# Su macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 🚀 Installazione e Avvio

### **1. Clonazione del Repository**
```bash
git clone <repository-url>
cd libreria
```

### **2. Setup Backend**
```bash
# Naviga nella directory backend
cd back-end

# Avvia il server di sviluppo
uv run .\main.py
```

Il backend sarà disponibile su `http://127.0.0.1:5000`

### **3. Setup Frontend (in un nuovo terminale)**
```bash
# Naviga nella directory frontend
cd front-end

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il frontend sarà disponibile su `http://localhost:5173`

## 📖 Utilizzo

### **Interfaccia Web**
1. **Aggiunta Libri**: Compila il form con titolo, autore, anno e seleziona un genere dalla lista
2. **Visualizzazione**: I libri vengono mostrati in una lista con layout orizzontale
3. **Ricerca**: Utilizza la barra di ricerca per filtrare per autore o genere
4. **Eliminazione**: Usa il pulsante "Elimina" per rimuovere singoli libri
5. **Svuotamento**: Il pulsante "Svuota Libreria" nell'header elimina tutti i libri

### **API Endpoints**

#### **GET /api/libri**
Recupera tutti i libri della collezione.
```json
[
  {
    "id": "uuid-string",
    "titolo": "Il Nome della Rosa",
    "autore": "Umberto Eco",
    "anno": 1980,
    "genere": "Giallo"
  }
]
```

#### **POST /api/libri**
Aggiunge un nuovo libro. Richiede un JSON con i campi obbligatori.
```json
{
  "titolo": "Nuovo Libro",
  "autore": "Autore Esempio",
  "anno": 2024,
  "genere": "Narrativa"
}
```

#### **DELETE /api/libri/<id>**
Elimina il libro con l'ID specificato.

#### **DELETE /api/libri**
Elimina tutti i libri dalla collezione.

#### **GET /api/generi**
Restituisce la lista dei generi disponibili.
```json
[
  "Narrativa",
  "Giallo",
  "Fantasy",
  "Fantascienza",
  "Horror",
  "Romanzo rosa",
  "Storico",
  "Avventura",
  "Biografia",
  "Saggio",
  "Poesia",
  "Umoristico"
]
```

## 🎨 Caratteristiche dell'Interfaccia

### **Design Moderno**
- Layout centrato e responsive
- Card con design pulito e ombre sottili
- Color scheme professionale
- Tipografia leggibile

### **User Experience**
- Form con validazione e feedback visivo
- Conferme per azioni distruttive
- Ricerca istantanea
- Indicatori di stato

### **Responsive Design**
- Ottimizzato per desktop e mobile
- Layout adattivo che si ridimensiona correttamente

## 🔧 Comandi Disponibili

### **Backend**
```bash
cd back-end
uv run .\main.py      # Avvia server sviluppo
```

### **Frontend**
```bash
cd front-end
npm install               # Installa dipendenze
npm run dev              # Avvia server sviluppo
```

## 📁 Struttura del Progetto

```
libreria/
├── back-end/              # API Flask
│   ├── main.py           # Applicazione principale
│   ├── pyproject.toml    # Configurazione dipendenze Python
│   └── uv.lock          # Lock file dipendenze
├── front-end/            # Applicazione React
│   ├── src/
│   │   ├── App.jsx      # Componente principale
│   │   ├── App.css      # Stili applicazione
│   │   └── main.jsx     # Entry point
│   ├── package.json     # Configurazione dipendenze Node
│   └── vite.config.js   # Configurazione Vite
├
└── README.md            # Questa documentazione
```

