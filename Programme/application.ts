import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
//Permet l'affhichage de la météo version graphique
function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);

  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();
  stationMeteo.ajouterObservateur("afficheur texte", aff)
  stationMeteo.ajouterObservateur("afficheur graphique", aff2)
  aff.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
  aff2.miseAJour(stationMeteo.humidité, stationMeteo.temperature)

  stationMeteo.humidité++;
  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();
    aff.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
    aff2.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
  }

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();
    aff.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
    aff2.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
    stationMeteo.humidité++;
    stationMeteo.temperature -= 3;
  }
}

main();
