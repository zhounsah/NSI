from microbit import *
from machine import time_pulse_us
import utime

################################
## 4-pin : avec ECHO et TRIG ###
################################

### Constantes
TRIG_PIN = pin3
ECHO_PIN = pin4

### désactivation des LED sinon elles occupent les pin 3 à 10
display.off()

### Définition d'une fonction
def mesure_distance():
    ### On envoie une impulsion de 10 µs sur la broche TRIG
    ### pour démarrer une salve d'ultrasons
    TRIG_PIN.write_digital(1)
    utime.sleep_us(10) # on attend pendant 10 µs
    TRIG_PIN.write_digital(0)
    # fin de l'impulsion

    ### Lecture du résultat et calcul de la distance
    # configuration de la broche ECHO en mode INPUT
    ECHO_PIN.read_digital()
    # Puis time_pulse_us attend que la broche ECHO passe à 1 puis
    # renvoie la durée en µs pendant laquelle la broche est restée à 1
    duree = time_pulse_us(ECHO_PIN, 1)
    # Calcul la distance en cm
    distance = int(duree * 0.01715)
    return distance


### Programme principal
while True:
    # bouton A pour effectuer et afficher une mesure
    if button_a.was_pressed():
        display.off()
        d = mesure_distance()
        display.on()
        # affichage dans la console REPL de l'éditeur
        print(d)
        # affichage sur la carte micro:bit
        display.show(' '+str(d)+" # ", delay=500, loop=False, wait=True)


    # bouton B pour effacer
    if button_b.was_pressed():
        display.clear()