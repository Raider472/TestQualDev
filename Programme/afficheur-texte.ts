import { IObserver } from "./IObserver";

export class AfficheurTexte implements IObserver {

  public affiche(humidité: number, température: number): void {
    console.log(température + "°C\n" + humidité + "%");
  }

  public miseAJour(humidité: number, température: number): void {
      this.affiche(humidité, température)
  }
}
