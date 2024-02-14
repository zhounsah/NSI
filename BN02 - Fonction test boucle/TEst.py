from random import randint
from time import time

bonnes_reponses = 0
temps_depart = time()
nombre1_alt = randint(1,10)
nombre2_alt = randint(1,10)

multiplication1 = nombre1_alt * nombre2_alt
print(nombre1_alt, nombre2_alt)

### réponse1 = int(input("Quel est le résultat de", nombre1_alt,"x", nombre2_alt, "?"))



temps_arrivee = time()
durée = ...
print(f"Vous avez mis {durée} s.")
