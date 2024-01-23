import { Personne } from "./personne.lib";
import { Produit } from "./produit.lib";

export class Fournisseur extends Personne {
    private _numeroFournisseur: number;
    private _produitsFournis: Produit[];

    constructor(nom: string, prenom: string, adresse: string, telephone: number, numeroFournisseur: number){
        super(nom, prenom, adresse, telephone);
        this._numeroFournisseur = numeroFournisseur;
        this._produitsFournis = [];
    }

    public get numeroFournisseur(): number {
        return this._numeroFournisseur;
    }
    public set numeroFournisseur(value: number) {
        this._numeroFournisseur = value;
    }
    public get produitsFournis(): Produit[] {
        return this._produitsFournis;
    }
    public set produitFourni(value: Produit) {
        this._produitsFournis.push(value);
    }
}