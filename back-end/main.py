from flask import Flask, jsonify, request
from faker import Faker
from flask_cors import CORS
import uuid
import random


app = Flask(__name__)
CORS(app) # Abilita le chiamate da React

fake = Faker('it_IT')

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


libri = []

def inizializza_dati():
    for _ in range(20):
        nuovo_libro = {
            'id': str(uuid.uuid4()), 
            'titolo': fake.sentence(nb_words=3).replace('.', ''), 
            'autore': fake.name(),
            'anno': fake.year(),
            'genere': random.choice(generi)
        }
        libri.append(nuovo_libro)

# Genera i dati 
inizializza_dati()
print(f"Server avviato. Generati {len(libri)} libri di test.")


@app.route('/api/libri', methods=['GET'])
def get_libri():
    return jsonify(libri)


@app.route('/api/generi', methods=['GET'])
def get_generi():
    return jsonify(generi)


@app.route('/api/libri', methods=['POST'])
def add_libro():
    """Aggiunge un nuovo libro. L'ID è generato dal server."""
    dati = request.get_json()  # Recupera i dati inviati dal form in React

    nuovo_libro = {
        'id': str(uuid.uuid4()),  # Genera id 
        'titolo': dati.get('titolo'),
        'autore': dati.get('autore'),
        'anno': dati.get('anno'),
        'genere': dati.get('genere')
    }

    libri.append(nuovo_libro)
    
    
    return jsonify(nuovo_libro), 201 # Messaggio di Created


@app.route('/api/libri/<id>', methods=['DELETE'])
def elimina_libro(id):
    """Elimina un libro dato il suo ID."""
    for libro in libri:
        if libro['id'] == id:
            libri.remove(libro)
            return jsonify({"messaggio": f"Libro {id} eliminato con successo"}), 200
         
    
    return jsonify({'error': 'Libro non trovato'}), 404


@app.route('/api/libri', methods=['DELETE'])
def elimina_tutti_libri():
    """Elimina tutti i libri dalla libreria."""
    global libri
    libri.clear()
    return jsonify({"messaggio": "Tutti i libri sono stati eliminati con successo"}), 200




if __name__ == '__main__':
    # Avvio del server in modalità debug
    app.run(debug=True)