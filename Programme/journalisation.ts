export class Journalisation {
    private static instance_: Map<String, Journalisation> = new Map<String, Journalisation>()
    private operation_: Array<string>

    constructor() {
        this.operation_ = []
    }

    public static getInstance(clef: string): Journalisation {
        if(!Journalisation.instance_.get(clef)) {
            Journalisation.instance_.set(clef, new Journalisation());
        }
        return Journalisation.instance_.get(clef)!;
        }

    public journaliser(operation: string) {
        this.operation_.push(operation);
    }

    public afficher() {
        for(let i = 0; i < this.operation_.length; i++) {
            let numero = i+1
            console.log("[" + numero + "] " + this.operation_[i])
        }
    }

    public recuppererParNumero(numero: number) { 
        if(this.operation_[numero-1] === undefined) {
            throw new Error("Le numero n'existe pas")
        }
        else {
            console.log("[" + numero + "] " + this.operation_[numero-1])
        }
    }
}