import { Personne } from "./personne.lib";
import { Achat } from "./achat.lib";
export class Client extends Personne {
    private _numeroClient: number;
    private _historiqueAchats: Achat[];

    constructor(nom: string, prenom: string, adresse: string, telephone: number, numeroClient: number){
        super(nom, prenom, adresse, telephone);
        this._numeroClient = numeroClient;
        this._historiqueAchats = [];
    }

    public get numeroClient(): number {
        return this._numeroClient;
    }
    public set numeroClient(value: number) {
        this._numeroClient = value;
    }
    public get historiqueAchats(): Achat[] {
        return this._historiqueAchats;
    }
    public set Achat(value: Achat) {
        this._historiqueAchats.push(value);
    }
}
