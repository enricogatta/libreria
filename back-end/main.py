from flask import Flask, jsonify, request
from faker import Faker
import uuid
import random

# Configurazione App e Faker
app = Flask(__name__)
fake = Faker()

# Lista dei generi disponibili
generi = [
    'Narrativa',
    'Giallo',
    'Fantasy',
    'Fantascienza',
    'Horror',
    'Romanzo rosa',
    'Storico',
    'Avventura',
    'Biografia',
    'Saggio',
    'Poesia',
    'Umoristico'
]

# Database in-memory
libri = []

def inizializza_dati():
    for _ in range(20):
        nuovo_libro = {
            'id': str(uuid.uuid4()),  # Generazione ID univoco
            'titolo': fake.sentence(nb_words=3).replace('.', ''), # Titolo simulato
            'autore': fake.name(),
            'anno': fake.year(),
            'genere': random.choice(generi)
        }
        libri.append(nuovo_libro)

# Generiamo i dati subito all'avvio dello script
inizializza_dati()
print(f"Server avviato. Generati {len(libri)} libri di test.")


@app.route('/api/libri', methods=['GET'])
def get_libri():
    return jsonify(libri)


@app.route('/api/libri', methods=['POST'])
def add_libro():
    """Aggiunge un nuovo libro. L'ID è generato dal server."""
    dati = request.get_json()  # Recupera i dati inviati (es. dal form React)

    nuovo_libro = {
        'id': str(uuid.uuid4()),  # Generiamo l'ID qui (lato server)
        'titolo': dati.get('titolo'),
        'autore': dati.get('autore'),
        'anno': dati.get('anno'),
        'genere': dati.get('genere')
    }

    libri.append(nuovo_libro)
    
    # Restituiamo il libro creato e il codice 201 (Created)
    return jsonify(nuovo_libro), 201


if __name__ == '__main__':
    # Avvio del server in modalità debug
    app.run(debug=True)