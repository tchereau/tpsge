import { Fournisseur } from "./fournisseur.lib";
export class Produit {
// référence, nom, prix, fournisseur.
    private _reference: string;
    private _nom: string;
    private _prix: number;
    private _fournisseur: Fournisseur;

    constructor(reference: string, nom: string, prix: number, fournisseur: Fournisseur){
        this._reference = reference;
        this._nom = nom;
        this._prix = prix;
        this._fournisseur = fournisseur;
    }

    public get reference(): string {
        return this._reference;
    }
    public set reference(value: string) {
        this._reference = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get fournisseur(): Fournisseur {
        return this._fournisseur;
    }
    public set fournisseur(value: Fournisseur) {
        this._fournisseur = value;
    }
}