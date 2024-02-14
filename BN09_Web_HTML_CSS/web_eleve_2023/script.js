document.body.style.backgroundColor = "red"
document.title = "Bonjour";

mes_balises_h2 = document.getElementsByTagName("h2"); // on sélectionne des éléments du DOM par leur nom de balise
// on parcourt la collection sélectionnée pour afficher son contenu textuel en console
for ( item of mes_balises_h2) {
   console.log(item.textContent);
}

function ma_fonction_message(){
   alert("Hello World !")
}

bouton = document.getElementById("mon_bouton"); // on sélectionne le bouton dont l'identifiant est "mon_bouton"
bouton.addEventListener('click', ma_fonction_message); // au clic sur cet élément, on effectue la fonction "ma_fonction_message"

function affichage_nom(){
   prenom = saisie_prenom.value // on récupère la valeur de la variable saisie_prenom et on l'affecte à la variable prenom
   para_bienvenue = document.getElementById("bienvenue") // on sélectionne le paragraphe dont l'identifiant est "bienvenue"
   para_bienvenue.innerHTML = "Bonjour "+prenom+" ! Bienvenue sur cette page." // on ajoute du texte dans ce paragraphe
}

saisie_prenom = document.getElementById("prenom"); // on sélectionne la zone de saisie par son identifiant "prenom"
saisie_prenom.addEventListener('change', affichage_nom);// au changement de focus sur cet élément, on effectue la fonction "affichage_nom"























 