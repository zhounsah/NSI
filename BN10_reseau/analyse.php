<html lang="fr">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>Bienvenue dans le serveur WEB élève. Vous êtes dans le répertoire <b>zachary</b>.</p>
<?php
$nom = $_GET["prenom"];
$age = $_GET["age"];
echo "Bonjour, $nom, et vous avez $age ans.";
?>

  </body>
</html>

