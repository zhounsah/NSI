function traitement() {
    var prenom = document.getElementById("prenom").value;
    alert("Bonjour "+prenom+", bienvenue.");
}
bouton = document.getElementById("mon_bouton");
bouton.addEventListener('click', traitement);


function traitement2() {
    // Pour les boutons radio, il n'y a qu'une seule réponse choisie :
    var reponse = document.querySelector('input[name="niveau"]:checked').value
    if (reponse == "1e")
        alert("Très bon choix, la 1ère est un très bon niveau !")
    else(
        alert("RAS")
    )
}

function traitement3() {
    // Pour les cases à cocher, plusieurs réponses ont pu être choisies
    // NB : Les cases cochées ont l'attribut booléen : 'checked' :
    var tabCases = document.querySelectorAll('input[name="pt_dejeuner"]:checked')
    var t = new Array()
    for(let i = 0; i< tabCases.length; i++)
        t.push(tabCases[i].value)
    if (JSON.stringify(t) == JSON.stringify(["cafe", "flakes"]))
        alert("C'est un choix peu commun !")
    else(
        alert("RAS")
    )
}



function traitement5() {
    // il y a plusieurs réponses choisies donc on met querySelectorAll :        
    var tabChoix = document.querySelectorAll('option:checked')
    var t = new Array()
    for(let i = 0; i< tabChoix.length; i++)
        t.push(tabChoix[i].value)
    if (JSON.stringify(t) == JSON.stringify(["fromage", "tarte_citron"])) 
        alert("OK, on enlève le café alors !")
}