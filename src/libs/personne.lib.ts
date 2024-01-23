export abstract class Personne {
    private _nom: string;
    private _prenom: string;
    private _adresse: string;
    private _telephone: number;
    
    constructor(nom: string, prenom: string, adresse: string, telephone: number){
        this._nom = nom;
        this._prenom = prenom;
        this._adresse = adresse;
        this._telephone = telephone;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
    public get adresse(): string {
        return this._adresse;
    }
    public set adresse(value: string) {
        this._adresse = value;
    }
    public get telephone(): number {
        return this._telephone;
    }
    public set telephone(value: number) {
        this._telephone = value;
    }
}