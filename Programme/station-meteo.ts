import { Observer } from "./Observer";
import { IObserver } from "./IObserver";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private _observer: Observer;

  constructor(temperature = 0, humidité = 15) {
    this._temperature = temperature;
    this._humidité = humidité;
    this._observer = new Observer();
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    this.notifierMiseAJour("mise à jour de la température");
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
    this.notifierMiseAJour("mise à jour de l'humidité");
  }

  public ajouterObservateur(eventType: string, listener: IObserver): void {
    this._observer.ajouter(eventType, listener);
  }

  public supprimerObservateur(eventType: string, listener: IObserver): void {
    this._observer.suppression(eventType, listener);
  }

  private notifierMiseAJour(eventType: string): void {
    this._observer.notifier(eventType, this._humidité, this._temperature);
  }

  public toString(): string {
    return this._temperature + "°C\n" + this._humidité + "%";
  }
}
