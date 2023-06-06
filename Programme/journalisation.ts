export class Journalisation {
    private static instance_: Journalisation
    private operation_: Array<string>

    constructor() {
        this.operation_ = []
    }

    public static getInstance(): Journalisation {
        if (!Journalisation.instance_) {
            Journalisation.instance_ = new Journalisation();
        }
        return Journalisation.instance_;
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