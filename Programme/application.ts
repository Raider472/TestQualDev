import * as rs from "readline-sync";

import { Journalisation } from "./journalisation";
import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
//Permet l'affhichage de la météo version graphique
function main(): void {
  const journalMesures = Journalisation.getInstance("Mesures")
  const journalEcart = Journalisation.getInstance("Ecarts")
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
    let ancienResultat = stationMeteo.temperature
    Journalisation.getInstance("Mesures").journaliser("Température " + stationMeteo.temperature + "°C " + "/ " + "Humidité : " + stationMeteo.humidité + " %")
    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
    if(p != 0) {
      let resultatEcart = stationMeteo.temperature - ancienResultat
      Journalisation.getInstance("Ecarts").journaliser("L'écart de température est de " + resultatEcart + "°C")
    }
  }

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();
    aff.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
    aff2.miseAJour(stationMeteo.humidité, stationMeteo.temperature)
    let ancienResultat = stationMeteo.temperature
    Journalisation.getInstance("Mesures").journaliser("Température " + stationMeteo.temperature + "°C " + "/ " + "Humidité : " + stationMeteo.humidité + " %")
    stationMeteo.humidité++;
    stationMeteo.temperature -= 3;
    let resultaEcart = stationMeteo.temperature - ancienResultat
    Journalisation.getInstance("Ecarts").journaliser("L'écart de température est de " + resultaEcart + "°C")
  }
  console.log("Appuyez sur entrée pour voir la Journalisation des mesures");
  rs.question();
  journalMesures.afficher()
  console.log("Appuyez sur entrée pour voir la Journalisation des écarts");
  rs.question();
  journalEcart.afficher()
  console.log("Veulliez choisir le numéro de l'entré de la mesure que vous voulez séléctionner");
  let numero = rs.question();
  journalMesures.recuppererParNumero(Number(numero))
}

main();
