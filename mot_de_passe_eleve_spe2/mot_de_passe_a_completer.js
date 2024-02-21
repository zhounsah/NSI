      const mot_de_passe = document.getElementById("mot_de_passe");
      
      function affiche_page(){
         const attente = document.getElementById("attente");
         attente.remove()
         const chargement = document.getElementById("chargement_ok");
         chargement.style.display = "block";
      }
      
      function choisir_couleur(niveau) {
         switch (niveau) { 
            case 'faible' :
               couleur = 'red';
               break;
            case 'moyen' : 
               couleur = 'orange';
               break;
            case 'fort' :
               couleur = 'green';
               break;
            default :
               couleur = 'lightblue'
         }
         return couleur
      }
      
      function affiche_resultat(force, niveau) {
         reponse = document.getElementById("reponse")
         reponse.innerHTML = "<p>La force de ce mot de passe est : " + force + "</p> Niveau indicatif : "
         const btn_niveau = document.createElement("button")
         btn_niveau.appendChild(document.createTextNode(niveau))
         // appeler la fonction 'choisir_couleur' avec le paramètre de niveau pour obtenir la couleur associée à ce niveau
         choisir_couleur(niveau);
         
         // attribuer au bouton la couleur renvoyée
         
         reponse.appendChild(btn_niveau)
      }
      
      function affiche_conseils(liste_conseils) {
         const conseilsDiv = document.getElementById("conseils")
         conseilsDiv.innerHTML = "<p>Conseils : </p>"; // Add this line
       
         liste_conseils.forEach((conseil) => {
           const newConseil = document.createElement("p")
           newConseil.textContent = conseil
           conseilsDiv.appendChild(newConseil);
         });
       }
       

      // initialisation Pyodide
      async function main() {
        let pyodide = await loadPyodide();
        console.log("ready!")
        affiche_page()
        return pyodide;
      }
      
      // fonction qui se lance à l'appui sur le bouton "Valider"
async function evaluatePython() {
   
   // attend que le module pyodide soit chargé
   let pyodide = await pyodideReadyPromise;
   
   // essaie de suivre les instructions du bloc "try" en cas d'erreur c'est le bloc "catch" qui est exécuté
   try {
       const force = pyodide.runPython(/* code Python pour force */);
       const niveau = pyodide.runPython(/* code Python pour niveau */);
       const liste_conseils = pyodide.runPython(/* code Python pour liste_conseils */);

       if (niveau === 'fort') {
           const conseilsDiv = document.getElementById("conseils");
           if (conseilsDiv) {
               const newConseil = document.createElement("p");
               newConseil.textContent = "Une dernière chose : votre mot de passe ne doit pas comporter de mots du dictionnaire ou de noms propres même entouré de chiffres et de caractères spéciaux !";
               conseilsDiv.appendChild(newConseil);
           } else {
               console.error("Element with id 'conseils' not found.");
           }
       }
   } catch (error) {
       console.error("Une erreur s'est produite lors de l'évaluation de Python :", error);
   }
}

     
          // programme en Python à compléter
          pyodide.runPython(`          
            from math import log2
            import js
            
             # à compléter
            `
          );
          // fin du Python
          
          // suite du programme en javascript
          
          let force = pyodide.globals.get('force') // pour récupérer la variable python "force" en js
          let niveau = pyodide.globals.get('niveau') // pour récupérer la variable python "niveau" en js
          let liste_conseils = pyodide.globals.get('liste_conseils') //  pour récupérer la variable python "liste_conseils" en js
          affiche_resultat(force,niveau)
          if (niveau != 'fort') {
            affiche_conseils(liste_conseils)
          }
          else {
          // on efface les anciens conseils
             conseils = document.getElementById("conseils");
             while (conseils.hasChildNodes()) {
               conseils.removeChild(conseils.firstChild);
             }
          //si le niveau du mot de passe est fort, afficher un dernier conseil dans la div "conseils" de la page HTML
            // à compléter 

            }
          
        }
        
        // en cas d'erreur dans le bloc "try", affichage de message d'erreur dans la console
        catch (err) {
         console.log(err);
       }
     }
     
     let pyodideReadyPromise = main();
