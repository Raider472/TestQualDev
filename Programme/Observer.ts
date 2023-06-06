import { IObserver } from "./IObserver";

export class Observer {
    private _listeners: Map<string, Array<IObserver>>;

    constructor() {
        this._listeners = new Map<string, Array<IObserver>>();
    }

    ajouter(eventType: string, listener: IObserver): void {
        if (!this._listeners.has(eventType)) {
            this._listeners.set(eventType, new Array<IObserver>());
        }
        this._listeners.get(eventType)!.push(listener);
    }

    suppression(eventType: string, listener: IObserver): void {
        if (!this._listeners.has(eventType)) {
            return;
        }
        const listeners = this._listeners.get(eventType)!;
        const index = listeners.indexOf(listener);
        if (index !== -1) {
            listeners.splice(index, 1);
        }
    }

    notifier(eventType: string, humidité: number, température: number): void {
        if(this._listeners.has(eventType)) {
            const listeners = this._listeners.get(eventType)!;
            for (const listener of listeners) {
                listener.miseAJour(humidité, température);
            }
        }
    }
}