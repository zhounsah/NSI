<html lang="fr">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>Bienvenue dans le serveur WEB élève. Vous êtes dans le répertoire <b>zachary</b>.</p>
<?php
echo "<p>PHP fonctionne.</p>";
$date = date("d-m-Y");
$heure = date("H:i:s");
echo "<p>Nous sommes le $date et il est $heure.</p>";


for ($i = 1; $i <= 100; $i++) {
  echo "<p>ligne $i</p>";

  if ($nb % 2 == 0) {echo "$nb est pair";}
else {echo "$nb est impair";}
}
?>
  </body>
</html>