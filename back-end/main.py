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



if __name__ == '__main__':
    # Avvio del server in modalità debug
    app.run(debug=True)